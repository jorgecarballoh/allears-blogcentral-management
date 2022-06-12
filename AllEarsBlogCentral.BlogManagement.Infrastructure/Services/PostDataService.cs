using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base;
using AutoMapper;
using Microsoft.Extensions.Options;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Services
{
    public class PostDataService : BaseDataService<Post>, IPostDataService
    {
        private readonly IMapper _mapper;
        public PostDataService(IOptions<APISettings> apiSettings, IMapper mapper) : base(apiSettings)
        {
            _mapper = mapper;
        }
        
        public async Task<List<Post>> GetPostsList()
        {
            var requestPost = new RestRequest("posts");
            requestPost.Timeout = _apiSettings.TimeOut;
            var result = await _client.GetAsync<List<Post>>(requestPost);
            return result;
        } 
    }
}
