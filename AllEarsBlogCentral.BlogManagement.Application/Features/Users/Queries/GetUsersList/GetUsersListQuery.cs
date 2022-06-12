using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList
{
    public class GetUsersListQuery : IRequest<List<UserListVm>>
    {
    }
}
