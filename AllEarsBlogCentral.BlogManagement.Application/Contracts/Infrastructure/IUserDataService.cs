using AllEarsBlogCentral.BlogManagement.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure
{
    public interface IUserDataService : IAsyncDataService<User>
    {
        Task<User> GetByIdAsync(int Id);
        Task<List<User>> GetUsersList();
        Task<User> GetUserWithPosts(int userId);
        Task<User> GetUserWithAlbumsAndPhotos(int userId);
        Task<User> GetUsersListWithAlbums(int userId);

   
    }
}
