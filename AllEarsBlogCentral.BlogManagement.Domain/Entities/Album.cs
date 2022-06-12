using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Domain.Entities
{
    public class Album
    {
        public int userId { get; set; }
        public int id { get; set; }
        public string title { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}
