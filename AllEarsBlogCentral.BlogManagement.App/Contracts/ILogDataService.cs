using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AllEarsBlogCentral.BlogManagement.App.ViewModels.VmLogs;

namespace AllEarsBlogCentral.BlogManagement.App.Contracts
{
    public interface ILogDataService
    {
        Task<List<LogUsersListVm>> GetLogUsersByDate(DateTime date);
        Task<List<LogPostsOfUserListVm>> GetLogPostsUserByDate(DateTime date);
        Task<List<LogAlbumsOfUserListVm>> GetLogAlbumsUserByDate(DateTime date);
        Task<List<LogPhotosOfUsersListVm>> GetLogPhotosUserByDate(DateTime date);
    }
}
