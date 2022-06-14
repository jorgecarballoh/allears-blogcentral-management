using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList
{
   

    public partial class AlbumsLists
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public object Photos { get; set; }
    }

    public partial class AlbumProperty
    {
        public List<AlbumsLists> AlbumsList { get; set; }
        public string SourceContext { get; set; }
        public string ActionId { get; set; }
        public string ActionName { get; set; }
        public string RequestId { get; set; }
        public string RequestPath { get; set; }
    }

    public partial class LogPhotosOfUsersListVm
    {
        public DateTime Timestamp { get; set; }
        public string Level { get; set; }
        public string MessageTemplate { get; set; }
        public AlbumProperty Properties { get; set; }
    }
}
