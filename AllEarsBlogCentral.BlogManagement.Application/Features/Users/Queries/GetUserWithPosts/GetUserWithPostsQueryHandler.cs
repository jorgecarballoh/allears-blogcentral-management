using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersListWithPosts
{
    public class GetUserWithPostsQueryHandler : IRequestHandler<GetUserWithPostsQuery, UserPostListVm>
    {
        private readonly IUserDataService _userService;

        private readonly IMapper _mapper;

        public GetUserWithPostsQueryHandler(IUserDataService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public async Task<UserPostListVm> Handle(GetUserWithPostsQuery request, CancellationToken cancellationToken)
        {
            var userWithPosts = await _userService.GetUserWithPosts(request.UserId);
            return _mapper.Map<UserPostListVm>(userWithPosts);
        }
    }
}
