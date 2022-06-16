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
                case 1: Users = await LogDataService.GetLogUsersByDate(dateSearch);
                    break;
                case 2: Posts = await LogDataService.GetLogPostsUserByDate(dateSearch);
                    break;
                case 3: Photos = await LogDataService.GetLogPhotosUserByDate(dateSearch);
                    break;
                case 4: Albums = await LogDataService.GetLogAlbumsUserByDate(dateSearch);
                    break;
                default:
                    break;
            }
        }
    }
}
