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
        Task<List<User>> GetUsersList();
        Task<User> GetByIdAsync(int Id);
    }
}
