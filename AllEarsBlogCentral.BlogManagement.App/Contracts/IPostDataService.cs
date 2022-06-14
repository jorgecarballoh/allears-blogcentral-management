using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Contracts
{
    public interface IPostDataService
    {
        Task<List<PostViewModel>> GetPostsList();
    }
}
