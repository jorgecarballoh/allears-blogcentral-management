using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.Services.Base;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using AutoMapper;
using Blazored.LocalStorage;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public class UserDataService : BaseDataService, IUserDataService
    {
        private readonly IMapper _mapper;

        public UserDataService(ILocalStorageService localStorage, IClient client, IMapper mapper) : base(localStorage, client)
        {
            _mapper = mapper;
        }

        public Task<UserViewModel> GetByIdAsync(int Id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<UserViewModel>> GetUsersList()
        {
            var allUsers = await _client.GetAllUsersAsync();
            var mappedUsers = _mapper.Map<ICollection<UserViewModel>>(allUsers);
            return mappedUsers.ToList();

        }

        public async Task<List<UserAlbumViewModel>> GetUsersListWithAlbums(int userId)
        {
            var allAlbumsUser = await _client.GetUsersWithAlbumsAsync(userId);
            var mappedAlbumsUser = _mapper.Map<ICollection<UserAlbumViewModel>>(allAlbumsUser);
            return mappedAlbumsUser.ToList();
        }

        public async Task<List<UserAlbumWithPhotoViewModel>> GetUserWithAlbumsAndPhotos(int userId)
        {
            var allAlbumsAndPhotosUser = await _client.GetUsersWithAlbumsAndPhotosAsync(userId);
            var mappedAlbumsAndPhotosUser = _mapper.Map<ICollection<UserAlbumWithPhotoViewModel>>(allAlbumsAndPhotosUser);
            return mappedAlbumsAndPhotosUser.ToList();
        }

        public async Task<List<UserPostViewModel>> GetUserWithPosts(int userId)
        {
            var allPostsUser = await _client.GetUsersWithPostsAsync(userId);
            var mappedPostsUser = _mapper.Map<ICollection<UserPostViewModel>>(allPostsUser);
            return mappedPostsUser.ToList();
        }
    }
}
