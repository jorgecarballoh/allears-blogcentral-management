using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.Services.Base;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using Blazored.LocalStorage;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public class PostDataService : BaseDataService, IPostDataService
    {
        public PostDataService(ILocalStorageService localStorage, IClient client) : base(localStorage, client)
        {
        }

        public Task<List<PostViewModel>> GetPostsList()
        {
            throw new System.NotImplementedException();
        }
    }
}
