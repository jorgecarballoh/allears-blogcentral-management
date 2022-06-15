using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using AutoMapper;
using Blazored.LocalStorage;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public class UserDataService : IUserDataService
    {
        private readonly HttpClient _client;

        public UserDataService(IMapper mapper, HttpClient client)
        {
            _client = client;
        }

        public Task<UserViewModel> GetByIdAsync(int Id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<UserViewModel>> GetUsersList()
        { 
            return await _client.GetFromJsonAsync<List<UserViewModel>>("api/user/all");  
        }

        public async Task<List<UserAlbumViewModel>> GetUsersListWithAlbums(int userId)
        {
           return  await _client.GetFromJsonAsync<List<UserAlbumViewModel>>($"/api/user/allwithalbums?userId={userId}");
        }

        public async Task<List<UserAlbumWithPhotoViewModel>> GetUserWithAlbumsAndPhotos(int userId)
        {
           return await _client.GetFromJsonAsync<List<UserAlbumWithPhotoViewModel>>($"/api/user/allwithalbumsandphotos?userId={userId}");  
        }

        public async Task<List<UserPostViewModel>> GetUserWithPosts(int userId)
        {
            return await _client.GetFromJsonAsync<List<UserPostViewModel>>($"/api/User/allwithposts?userId={userId}");
        }
    }
}
