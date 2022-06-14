using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserAlbumsList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPostList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUsersList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Contracts
{
    public interface ILogUserDataService
    {
        Task<List<LogUsersListVm>> GetLogUsersByDate(DateTime date);
        Task<List<LogPostsOfUserListVm>> GetLogPostsUserByDate(DateTime date);
        Task<List<LogAlbumsOfUserListVm>> GetLogAlbumsUserByDate(DateTime date);
        Task<List<LogPhotosOfUsersListVm>> GetLogPhotosUserByDate(DateTime date);
    }
}
