using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base;
using AutoMapper;
using Microsoft.Extensions.Options;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services
{
    public class UserDataService : BaseDataService<User>, IUserDataService
    {
        private readonly IMapper _mapper;
        private readonly ILogger<UserDataService> _logger;
        public UserDataService(IOptions<APISettings> apiSettings, IMapper mapper, ILogger<UserDataService> logger) : base(apiSettings)
        {
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<User> GetByIdAsync(int Id)
        {
            _logger.LogInformation("Starting  request for getting the user with id: {Id}", Id);
            var requestUser = new RestRequest($"users/{Id}");
            requestUser.Timeout = _apiSettings.TimeOut;
            var user = await _client.GetAsync<User>(requestUser);
            _logger.LogInformation("Processed request for getting the User: {@UsersList}", user);
            return user;
        }

        public async Task<List<User>> GetUsersList()
        {
            _logger.LogInformation("Starting request for getting the list of users");
            var request = new RestRequest("users");
            request.Timeout = _apiSettings.TimeOut;
            var usersList = await _client.GetAsync<List<User>>(request);
            _logger.LogInformation("Processed the list of users: {@UsersList}", usersList);
            return usersList;
        }

        public async Task<User> GetUsersListWithAlbums(int userId)
        {
            return await CreateAssociationUserAndAlbumsList(userId);
        }

        public async Task<User> GetUserWithPosts(int userId)
        {
            return await CreateAssociationUserAndPostsList(userId);
        }

        private async Task<User> CreateAssociationUserAndPostsList(int userId)
        {
            var user = await GetByIdAsync(userId);

            _logger.LogInformation("Starting request for getting the posts of user");

            var requestPosts = new RestRequest($"users/{userId}/posts");
            requestPosts.Timeout = _apiSettings.TimeOut;
            var postsList = await _client.GetAsync<List<Post>>(requestPosts);

            _logger.LogInformation("Processed the list of posts from user: {@PostsList}", postsList);

            var userVm = _mapper.Map<User>(user);
            userVm.Posts = postsList;
            return userVm;
        }

        private async Task<User> CreateAssociationUserAndAlbumsList(int userId)
        { 
            var user = await GetByIdAsync(userId);

            _logger.LogInformation("Starting request for getting the albums of user");

            var requestAlbumsPerUser = new RestRequest($"users/{userId}/albums");
            requestAlbumsPerUser.Timeout = _apiSettings.TimeOut;
            var albumsList = await _client.GetAsync<List<Album>>(requestAlbumsPerUser);

            _logger.LogInformation("Processed request for getting the list of albums: {@AlbumsList}", albumsList);

            var userVm = _mapper.Map<User>(user);
            userVm.Albums = albumsList;
            return userVm;
        }

        private async Task<User> CreateAssociationUserWithAlbumsAndPhotosList(int userId)
        {
            var user = await GetByIdAsync(userId);
            var userAlbumsList = await CreateAssociationUserAndAlbumsList(userId);
            var resultAlbums = await AssingPhotosToAlbums(userAlbumsList);

            var userVm = _mapper.Map<User>(user);
            userVm.Albums = resultAlbums;
            return userVm;

        }

        private  async Task<ICollection<Album>> AssingPhotosToAlbums(User userAlbumsList)
        {
            Func<int, Task<List<Photo>>> GetPhotosByAlbum = async (int albumId) =>
             {
                 _logger.LogInformation("Starting request for getting the photos of albums");
                 var requestAlbumPhotos = new RestRequest($"/albums/{albumId}/photos");
                 var photosList = await _client.GetAsync<List<Photo>>(requestAlbumPhotos);
                 _logger.LogInformation("Processed the list of photos from albums: {@PhotosList}", photosList);
                 return photosList;
             };

             return await Task.WhenAll(userAlbumsList.Albums.Select(async x => new Album
             {
                 Id = x.Id,
                 Title = x.Title,
                 UserId = x.UserId,
                 Photos = await GetPhotosByAlbum(x.Id)
             }));


        }



        public async Task<User> GetUserWithAlbumsAndPhotos(int userId)
        {
            return await CreateAssociationUserWithAlbumsAndPhotosList(userId);
        }
    }
}
