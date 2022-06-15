using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using AutoMapper;
using Blazored.LocalStorage;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public class PostDataService : IPostDataService
    {
        private readonly HttpClient _httpClient;

        public PostDataService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<PostViewModel>> GetPostsList()
        {
            return await _httpClient.GetFromJsonAsync<List<PostViewModel>>("api/post/all");
        }
    }
}
