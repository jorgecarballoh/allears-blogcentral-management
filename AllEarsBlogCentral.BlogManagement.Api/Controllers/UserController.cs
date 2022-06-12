using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersList;
using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersListWithPosts;
using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbums;
using AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUserWithAlbumsAndPhotos;
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

        [HttpGet("allwithposts", Name = "GetUsersWithPosts")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<UserPostListVm>>> GetUsersWithPosts(int userId)
        {
            var getUserWithPostsQuery = new GetUserWithPostsQuery() {  UserId = userId };
            var dtos = await _mediator.Send(getUserWithPostsQuery);
            return Ok(dtos);
        }

        [HttpGet("allwithalbums", Name = "GetUsersWithAlbums")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<UserAlbumListVm>>> GetUsersWithAlbums(int userId)
        {
            var getUserWithAlbumsQuery = new GetUserWithAlbumsQuery() { UserId = userId };
            var dtos = await _mediator.Send(getUserWithAlbumsQuery);
            return Ok(dtos);
        }

        [HttpGet("allwithalbumsandphotos", Name = "GetUsersWithAlbumsAndPhotos")]
        [ProducesDefaultResponseType]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<UserAlbumWithPhotoListVm>>> GetUsersWithAlbumsAndPhotos(int userId)
        {
            var getUserAlbumsWithPhotosQuery = new GetUserAlbumsWithPhotosQuery() { UserId = userId };
            var dtos = await _mediator.Send(getUserAlbumsWithPhotosQuery);
            return Ok(dtos);
        }


    }
}
