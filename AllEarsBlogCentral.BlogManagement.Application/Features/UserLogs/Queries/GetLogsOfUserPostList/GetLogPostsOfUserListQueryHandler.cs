using AllEarsBlogCentral.BlogManagement.Application.Contracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPostList
{
    public class GetLogPostsOfUserListQueryHandler : IRequestHandler<GetLogPostsOfUserListQuery, List<LogPostsOfUserListVm>>
    {
        private readonly ILogUserDataService _logUserDataService;

        public GetLogPostsOfUserListQueryHandler(ILogUserDataService logUserDataService)
        {
            _logUserDataService = logUserDataService;
        }

        public async Task<List<LogPostsOfUserListVm>> Handle(GetLogPostsOfUserListQuery request, CancellationToken cancellationToken)
        {
            var allPostsUserLog = await _logUserDataService.GetLogPostsUserByDate(request.Date);
            return allPostsUserLog;
        }
    }
}
