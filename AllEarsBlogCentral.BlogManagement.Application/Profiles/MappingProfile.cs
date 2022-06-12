using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList;
using AllEarsBlogCentral.BlogManagement.Application.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
         
            CreateMap<User, UserListVm>();
            CreateMap<Address, AddressDto>();
            CreateMap<Company, CompanyDto>();
            CreateMap<Geo, GeoDto>();

        }
    }
}
