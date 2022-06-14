using AllEarsBlogCentral.BlogManagement.Application.Contracts;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserAlbumsList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPostList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUsersList;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Utilities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services
{
    public class LogUserDataService : FileManager, ILogUserDataService
    {
        public LogUserDataService(IHostingEnvironment environment) : base(environment)
        {
        }

        public async Task<List<LogUsersListVm>> GetLogUsersByDate(DateTime date)
        {
            var dataReadFromLog = await ReadAllLineFromLogsFileByDate(date.ToString("yyyyMMdd"));

            var listOfUsersInFileLogs =  dataReadFromLog.Select(x => JsonConvert.DeserializeObject<LogUsersListVm>(x))
                                        .Where(y => y.Level.Equals("Information") && y.MessageTemplate
                                        .Contains("Processed the list of users: {@UsersList}"))
                                        .ToList();

            return listOfUsersInFileLogs;

             
        }



        public async Task<List<LogPostsOfUserListVm>> GetLogPostsUserByDate(DateTime date)
        {
            var dataReadFromLog = await ReadAllLineFromLogsFileByDate(date.ToString("yyyyMMdd"));

            var listPostsOfUserInFileLogs = dataReadFromLog.Select(x => JsonConvert.DeserializeObject<LogPostsOfUserListVm>(x))
                                                       .Where(y => y.Level.Equals("Information") && y.MessageTemplate
                                                       .Contains("Processed the list of posts from user: {@PostsList}"))
                                                       .ToList();

            return listPostsOfUserInFileLogs;
        }

        public async Task<List<LogAlbumsOfUserListVm>> GetLogAlbumsUserByDate(DateTime date)
        {
            var dataReadFromLog = await ReadAllLineFromLogsFileByDate(date.ToString("yyyyMMdd"));

            var listPostsOfUserInFileLogs = dataReadFromLog.Select(x => JsonConvert.DeserializeObject<LogAlbumsOfUserListVm>(x))
                                                       .Where(y => y.Level.Equals("Information") && y.MessageTemplate
                                                       .Contains("Processed request for getting the list of albums: {@AlbumsList}"))
                                                       .ToList();

            return listPostsOfUserInFileLogs;
        }

        public async Task<List<LogPhotosOfUsersListVm>> GetLogPhotosUserByDate(DateTime date)
        {
            var dataReadFromLog = await ReadAllLineFromLogsFileByDate(date.ToString("yyyyMMdd"));

            var listPostsOfUserInFileLogs = dataReadFromLog.Select(x => JsonConvert.DeserializeObject<LogPhotosOfUsersListVm>(x))
                                                       .Where(y => y.Level.Equals("Information") && y.MessageTemplate
                                                       .Contains("Processed the list of photos from albums: {@PhotosList}"))
                                                       .ToList();

            return listPostsOfUserInFileLogs;
        }

    }
}
