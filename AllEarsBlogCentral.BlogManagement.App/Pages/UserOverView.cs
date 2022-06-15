using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Pages
{
    public partial class UserOverview
    {
        [Inject]
        public IUserDataService UserDataService { get; set; }

        [Inject]
        public NavigationManager NavigationManager { get; set; }

        public ICollection<UserViewModel> Users { get; set; }

        protected async override Task OnInitializedAsync()
        {
            Users = (await UserDataService.GetUsersList()).ToList();
        }
    }
}
