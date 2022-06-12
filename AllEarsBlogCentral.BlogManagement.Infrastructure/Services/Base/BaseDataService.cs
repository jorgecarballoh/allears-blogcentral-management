using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using Microsoft.Extensions.Options;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base
{
    public class BaseDataService<T> : IAsyncDataService<T> where T : class
    {
        public readonly RestClient _client;
        public APISettings _apiSettings { get; set; }

        public BaseDataService(IOptions<APISettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
            _client = new RestClient(_apiSettings.Url);
        }

        public Task<List<T>> ListAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
