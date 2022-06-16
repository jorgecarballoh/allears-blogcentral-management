using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using AutoMapper;
using Blazored.LocalStorage;
using Newtonsoft.Json;
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

        public async Task<List<UserViewModel>> GetUsersList()
        { 
            return await _client.GetFromJsonAsync<List<UserViewModel>>("api/user/all");  
        }

        public async Task<UserAlbumViewModel> GetUsersListWithAlbums(int userId)
        {
           return  await _client.GetFromJsonAsync<UserAlbumViewModel>($"/api/user/allwithalbums?userId={userId}");
        }

        public async Task<List<List<PhotoViewModel>>> GetPhotosOfUser(int userId)
        {
            
            var response =  await _client.GetFromJsonAsync<UserAlbumWithPhotoViewModel>($"/api/user/allwithalbumsandphotos?userId={userId}");
            return response.Albums.Select(x => x.Photos).Take(1).ToList().Take(1).ToList();
 
        }

        public async Task<UserPostViewModel> GetUserWithPosts(int userId)
        {
            return await _client.GetFromJsonAsync<UserPostViewModel>($"/api/User/allwithposts?userId={userId}");
        }
    }

}
