using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbums
{
    public class GetUserWithAlbumsQueryHandler : IRequestHandler<GetUserWithAlbumsQuery, UserAlbumListVm>
    {
        private readonly IUserDataService _userService;

        private readonly IMapper _mapper;

        public GetUserWithAlbumsQueryHandler(IUserDataService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public async Task<UserAlbumListVm> Handle(GetUserWithAlbumsQuery request, CancellationToken cancellationToken)
        {
            var userWithAlbums = await _userService.GetUsersListWithAlbums(request.UserId);
            return _mapper.Map<UserAlbumListVm>(userWithAlbums);
        }
    }
}
