using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.ViewModels.VmLogs;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App.Pages
{
    public partial class LogOverview
    {
        [Inject]
        public ILogDataService LogDataService { get; set; }

        public ICollection<LogUsersListVm> Users { get; set; }
        public ICollection<LogPostsOfUserListVm> Posts { get; set; }
        public ICollection<LogPhotosOfUsersListVm> Photos { get; set; }
        public ICollection<LogAlbumsOfUserListVm> Albums { get; set; }

        public string OptionSelected { get; set; }
        public DateTimeOffset DateConsulted { get; set; }

        protected async Task OnConsulReport(MouseEventArgs args)
        {
            int.TryParse(OptionSelected, out var optionSelected);
            var dateSearch = DateConsulted.Date.ToString("yyyy/MM/dd");
            DateTime.TryParse(dateSearch, out var newDate);

            await GetData(optionSelected, newDate);
        }

        private async Task  GetData(int option, DateTime dateSearch)
        {
            switch (option)
            {
                case 1:
                    var usersList = await LogDataService.GetLogUsersByDate(dateSearch);
                    if (usersList.Count > 0) Users = usersList;
                    break;
                case 2:
                    var postsList = await LogDataService.GetLogPostsUserByDate(dateSearch);
                    if (postsList.Count > 0) Posts = postsList;
                    break;
                case 3:
                    var photosList = await LogDataService.GetLogPhotosUserByDate(dateSearch);
                    if (photosList.Count > 0) Photos = photosList;
                    break;
                case 4: 
                    var albumsList = await LogDataService.GetLogAlbumsUserByDate(dateSearch);
                    if (albumsList.Count > 0) Albums = albumsList;
                    break;
                default:
                    break;
            }
        }
    }
}
