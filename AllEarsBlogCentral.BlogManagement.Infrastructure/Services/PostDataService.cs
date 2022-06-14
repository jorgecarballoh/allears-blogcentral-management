using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base;
using AutoMapper;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger<PostDataService> _logger;
        public PostDataService(IOptions<APISettings> apiSettings, IMapper mapper, ILogger<PostDataService> logger) : base(apiSettings)
        {
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<List<Post>> GetPostsList()
        {
            _logger.LogInformation("Starting request for getting the list of posts");
            var requestPost = new RestRequest("posts");
            requestPost.Timeout = _apiSettings.TimeOut;
            var postsList = await _client.GetAsync<List<Post>>(requestPost);
            _logger.LogInformation("Processed the list of users: {@PostsList}", postsList);
            return postsList;
        } 
    }
}
