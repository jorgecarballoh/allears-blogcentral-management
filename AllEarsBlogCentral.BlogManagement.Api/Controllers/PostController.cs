using AllEarsBlogCentral.BlogManagement.Application.Features.Posts.Queries.GetPostsList;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PostController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("all", Name = "GetAllPosts")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<PostListVm>>> GetAllPosts()
        {
            var dtos = await _mediator.Send(new GetPostsListQuery());
            return Ok(dtos);
        }
    }
}
