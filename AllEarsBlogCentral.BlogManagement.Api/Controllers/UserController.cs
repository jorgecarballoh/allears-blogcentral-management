using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("all", Name = "GetAllUsers")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<UserListVm>>> GetAllUsers()
        {
            var dtos = await _mediator.Send(new GetUsersListQuery());
            return Ok(dtos);
        }

     
    }
}
