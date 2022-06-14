using AllEarsBlogCentral.BlogManagement.Application.Contracts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList
{
    public class GetLogPhotosOfUsersListQueryHandler : IRequestHandler<GetLogPhotosOfUsersListQuery, List<LogPhotosOfUsersListVm>>
    {
        private readonly ILogUserDataService _logUserDataService;

        public GetLogPhotosOfUsersListQueryHandler(ILogUserDataService logUserDataService)
        {
            _logUserDataService = logUserDataService;
        }

        public async Task<List<LogPhotosOfUsersListVm>> Handle(GetLogPhotosOfUsersListQuery request, CancellationToken cancellationToken)
        {
            var allLogAlbumsUser = await _logUserDataService.GetLogPhotosUserByDate(request.Date);
            return allLogAlbumsUser;
        }
    }
}
