using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbums
{
    public class UserAlbumDto
    { 
        public int Id { get; set; }
        public string Title { get; set; }
        public int UserId { get; set; }
    }
}
