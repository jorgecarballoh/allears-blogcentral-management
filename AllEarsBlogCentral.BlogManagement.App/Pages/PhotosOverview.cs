using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Pages
{
    public partial class PhotosOverview
    {
        public int CounterPagination = 0;

        public int CounterSlider = 0;

        [Inject]
        public IUserDataService UserDataService { get; set; }

        public ICollection<UserViewModel> Users { get; set; }

        public List<List<PhotoViewModel>> Photos { get; set; }

        protected async override Task OnInitializedAsync()
        {
            Users = (await UserDataService.GetUsersList()).ToList();
        }

        protected async void OnListUsersSelected(ChangeEventArgs args)
        {
            int.TryParse((string)args.Value, out var userId);
            Photos = (await UserDataService.GetPhotosOfUser(userId)).ToList();
        }

    }
}
