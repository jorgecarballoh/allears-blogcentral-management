using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels.VmLogs;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public class LogDataService : ILogDataService
    {
        private readonly HttpClient _httpClient;

        public LogDataService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<LogAlbumsOfUserListVm>> GetLogAlbumsUserByDate(DateTime date)
        {
            return await _httpClient.GetFromJsonAsync<List<LogAlbumsOfUserListVm>>($"api/log/albumslist?date={date}");
        }

        public async Task<List<LogPhotosOfUsersListVm>> GetLogPhotosUserByDate(DateTime date)
        {
            return await _httpClient.GetFromJsonAsync<List<LogPhotosOfUsersListVm>>($"api/log/photoslist?date={date}");
        }

        public async Task<List<LogPostsOfUserListVm>> GetLogPostsUserByDate(DateTime date)
        {
            return await _httpClient.GetFromJsonAsync<List<LogPostsOfUserListVm>>($"api/log/postslist?date={date}");
        }

        public async Task<List<LogUsersListVm>> GetLogUsersByDate(DateTime date)
        {
            return await _httpClient.GetFromJsonAsync<List<LogUsersListVm>>($"api/log/userslist?date={date}");
        }
    }
}
