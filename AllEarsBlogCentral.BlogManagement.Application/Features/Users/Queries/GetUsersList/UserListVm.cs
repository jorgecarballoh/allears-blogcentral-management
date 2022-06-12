using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList
{
    public class UserListVm
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public AddressDto address { get; set; }
        public string phone { get; set; }
        public string website { get; set; }
        public CompanyDto company { get; set; }
    }
}
