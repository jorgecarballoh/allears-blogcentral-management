using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Contracts
{
    public interface IUserDataService
    {
        Task<UserViewModel> GetByIdAsync(int Id);
        Task<List<UserViewModel>> GetUsersList();
        Task<List<UserPostViewModel>> GetUserWithPosts(int userId);
        Task<List<UserAlbumWithPhotoViewModel>> GetUserWithAlbumsAndPhotos(int userId);
        Task<List<UserAlbumViewModel>> GetUsersListWithAlbums(int userId);
    }
}
