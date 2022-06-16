using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Pages
{
    public partial class PostOverview
    {
        [Inject]
        public IPostDataService PostDataService { get; set; }
        public ICollection<PostViewModel> Posts { get; set; }

        protected async override Task OnInitializedAsync()
        {
            Posts = (await PostDataService.GetPostsList()).ToList();
        }
    }
}
