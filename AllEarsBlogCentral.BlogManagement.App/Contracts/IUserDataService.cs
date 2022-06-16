using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Contracts
{
    public interface IUserDataService
    {
        Task<List<UserViewModel>> GetUsersList();
        Task<UserPostViewModel> GetUserWithPosts(int userId);
        Task<List<List<PhotoViewModel>>> GetPhotosOfUser(int userId);
        Task<UserAlbumViewModel> GetUsersListWithAlbums(int userId);
    }
}
