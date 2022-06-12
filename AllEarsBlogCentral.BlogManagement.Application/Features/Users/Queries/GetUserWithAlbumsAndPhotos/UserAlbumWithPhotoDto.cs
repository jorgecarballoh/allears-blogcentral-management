using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Commons;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbumsAndPhotos
{
    public class UserAlbumWithPhotoDto
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}
