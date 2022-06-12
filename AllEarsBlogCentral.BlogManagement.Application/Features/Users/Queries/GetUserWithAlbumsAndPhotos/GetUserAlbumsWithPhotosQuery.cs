using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbumsAndPhotos
{
    public class GetUserAlbumsWithPhotosQuery: IRequest<UserAlbumWithPhotoListVm>
    {
        public int UserId   { get; set; }
    }
}
