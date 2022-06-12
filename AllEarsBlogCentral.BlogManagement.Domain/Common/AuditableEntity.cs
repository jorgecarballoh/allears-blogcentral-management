using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Domain.Common
{
    public class AuditableEntity
    {
        public string ConsultedBy { get; set; }
        public DateTime ConsultedDate { get; set; }
    }
}
