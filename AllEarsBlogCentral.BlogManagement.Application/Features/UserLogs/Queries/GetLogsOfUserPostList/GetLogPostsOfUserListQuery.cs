using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPostList
{
    public class GetLogPostsOfUserListQuery: IRequest<List<LogPostsOfUserListVm>>
    {
        public DateTime Date { get; set; }
    }
}
