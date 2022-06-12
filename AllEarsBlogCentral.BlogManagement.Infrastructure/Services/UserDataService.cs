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
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services
{
    public class UserDataService : BaseDataService<User>, IUserDataService
    {
        private readonly IMapper _mapper;
        public UserDataService(IOptions<APISettings> apiSettings, IMapper mapper) : base(apiSettings)
        {
            _mapper = mapper;  
        }

        public async Task<User> GetByIdAsync(int Id)
        {
            var requestUser = new RestRequest($"users/{Id}");
            requestUser.Timeout = _apiSettings.TimeOut;
            var user = await _client.GetAsync<User>(requestUser);

            return user;
        }

        public async Task<List<User>> GetUsersList()
        {
            var request = new RestRequest("users");
            request.Timeout = _apiSettings.TimeOut;
            var result = await _client.GetAsync<List<User>>(request);
            return result;
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

            var requestPosts = new RestRequest($"users/{userId}/posts");
            requestPosts.Timeout = _apiSettings.TimeOut;
            var postsList = await _client.GetAsync<List<Post>>(requestPosts);

            var userVm = _mapper.Map<User>(user);
            userVm.Posts = postsList;
            return userVm;
        }

        private async Task<User> CreateAssociationUserAndAlbumsList(int userId)
        {
            var user = await GetByIdAsync(userId);

            var requestAlbumsPerUser = new RestRequest($"users/{userId}/albums");
            requestAlbumsPerUser.Timeout = _apiSettings.TimeOut;
            var albumsList = await _client.GetAsync<List<Album>>(requestAlbumsPerUser);

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
                 var requestAlbumPhotos = new RestRequest($"/albums/{albumId}/photos");
                 var photosList = await _client.GetAsync<List<Photo>>(requestAlbumPhotos);
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
