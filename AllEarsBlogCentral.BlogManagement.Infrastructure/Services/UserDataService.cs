using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base;
using Microsoft.Extensions.Options;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services
{
    public class UserDataService : BaseDataService<User>, IUserDataService
    {
        public UserDataService(IOptions<APISettings> apiSettings) : base(apiSettings)
        {
        }

        public Task<User> GetByIdAsync(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<User>> GetUsersList()
        {
            var request = new RestRequest("users");
            request.Timeout = _apiSettings.TimeOut;
            var result = await _client.GetAsync<List<User>>(request);
            return result;
        }
    }
}
