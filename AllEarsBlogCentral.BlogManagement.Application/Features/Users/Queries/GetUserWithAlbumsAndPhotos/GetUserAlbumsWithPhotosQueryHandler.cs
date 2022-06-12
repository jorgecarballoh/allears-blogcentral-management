using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbumsAndPhotos
{
    public class GetUserAlbumsWithPhotosQueryHandler : IRequestHandler<GetUserAlbumsWithPhotosQuery, UserAlbumWithPhotoListVm>
    {
        private readonly IUserDataService _userService;

        private readonly IMapper _mapper;

        public GetUserAlbumsWithPhotosQueryHandler(IUserDataService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public async Task<UserAlbumWithPhotoListVm> Handle(GetUserAlbumsWithPhotosQuery request, CancellationToken cancellationToken)
        {
            var userWithAlbumsAndPhotos = await _userService.GetUserWithAlbumsAndPhotos(request.UserId);
            return _mapper.Map<UserAlbumWithPhotoListVm>(userWithAlbumsAndPhotos);
        }
    }
}
