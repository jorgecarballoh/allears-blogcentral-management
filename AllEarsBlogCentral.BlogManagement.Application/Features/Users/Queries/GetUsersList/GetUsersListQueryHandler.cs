

using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AutoMapper;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList
{
    public class GetUsersListQueryHandler : IRequestHandler<GetUsersListQuery, List<UserListVm>>
    {
        private readonly IUserDataService _userService;
        private readonly IMapper _mapper;

        public GetUsersListQueryHandler(IUserDataService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public async Task<List<UserListVm>> Handle(GetUsersListQuery request, CancellationToken cancellationToken)
        {
            var allUsers = (await _userService.GetUsersList()).OrderBy(x => x.id);
            return _mapper.Map<List<UserListVm>>(allUsers);
        }
    }
}
