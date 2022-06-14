using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUsersList
{
    public class GetLogsOfUsersListQuery: IRequest<List<LogUsersListVm>>
    {
        public DateTime Date { get; set; }
    }
}
