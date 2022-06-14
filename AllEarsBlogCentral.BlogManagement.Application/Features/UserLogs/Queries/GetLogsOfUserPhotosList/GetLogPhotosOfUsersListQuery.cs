using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList
{
    public class GetLogPhotosOfUsersListQuery: IRequest<List<LogPhotosOfUsersListVm>>
    {
        public DateTime Date { get; set; }
    }
}
