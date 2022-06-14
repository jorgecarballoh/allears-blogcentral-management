using AllEarsBlogCentral.BlogManagement.Application.Contracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserAlbumsList
{
    public class GetLogAlbumsOfUserListQueryHandler : IRequestHandler<GetLogAlbumsOfUserListQuery, List<LogAlbumsOfUserListVm>>
    {
        private readonly ILogUserDataService _logUserDataService;

        public GetLogAlbumsOfUserListQueryHandler(ILogUserDataService logUserDataService)
        {
            _logUserDataService = logUserDataService;
        }

        public async Task<List<LogAlbumsOfUserListVm>> Handle(GetLogAlbumsOfUserListQuery request, CancellationToken cancellationToken)
        {
            var allAlbumsUserLog = await _logUserDataService.GetLogAlbumsUserByDate(request.Date);
            return allAlbumsUserLog;
        }
    }
}
