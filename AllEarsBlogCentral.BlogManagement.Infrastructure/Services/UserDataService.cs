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
            return await CreateAssociationUsersAndAlbumsList(userId);
        }

        public async Task<User> GetUserWithPosts(int userId)
        {
            return await CreateAssociationUsersAndPostsList(userId);
        }

        private async Task<User> CreateAssociationUsersAndPostsList(int userId)
        {
            var user = await GetByIdAsync(userId);

            var requestPosts = new RestRequest($"users/{userId}/posts");
            requestPosts.Timeout = _apiSettings.TimeOut;
            var postsList = await _client.GetAsync<List<Post>>(requestPosts);

            var userVm = _mapper.Map<User>(user);
            userVm.Posts = postsList;
            return userVm;
        }

        private async Task<User> CreateAssociationUsersAndAlbumsList(int userId)
        {
            var user = await GetByIdAsync(userId);

            var requestAlbumsPerUser = new RestRequest($"users/{userId}/albums");
            requestAlbumsPerUser.Timeout = _apiSettings.TimeOut;
            var albumsList = await _client.GetAsync<List<Album>>(requestAlbumsPerUser);

            var userVm = _mapper.Map<User>(user);
            userVm.Albums = albumsList;
            return userVm;
        }
    }
}
