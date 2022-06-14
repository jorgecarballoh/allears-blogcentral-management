using AllEarsBlogCentral.BlogManagement.Application.Contracts;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUsersList
{
    public class GetLogsOfUsersListQueryHandler : IRequestHandler<GetLogsOfUsersListQuery, List<LogUsersListVm>>
    {
        private readonly ILogUserDataService _logUserDataService;

        public GetLogsOfUsersListQueryHandler(ILogUserDataService logUserDataService)
        {
            _logUserDataService = logUserDataService;
        }

        public async Task<List<LogUsersListVm>> Handle(GetLogsOfUsersListQuery request, CancellationToken cancellationToken)
        {
            var allUsersLog = await _logUserDataService.GetLogUsersByDate(request.Date);
            return allUsersLog;
        }
    }
}
