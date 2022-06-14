using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUsersList;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPostList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserAlbumsList;
using AllEarsBlogCentral.BlogManagement.Application.Features.UserLogs.Queries.GetLogsOfUserPhotosList;

namespace AllEarsBlogCentral.BlogManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly IMediator _mediator;

        public LogController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("userslist", Name = "GetLogsOfUsersList")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<LogUsersListVm>>> GetLogsOfUsersList(DateTime date)
        {
            var getLogsOfUsersListVmQuery =  new GetLogsOfUsersListQuery() { Date = date};
            var dtos = await _mediator.Send(getLogsOfUsersListVmQuery);
            return Ok(dtos);
        }

        [HttpGet("postlist", Name = "GetLogsOfPostsUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<LogPostsOfUserListVm>>> GetLogsOfPostsUser(DateTime date)
        {
            var getLogPostsOfUserListQuery = new GetLogPostsOfUserListQuery() { Date = date };
            var dtos = await _mediator.Send(getLogPostsOfUserListQuery);
            return Ok(dtos);
        }

        [HttpGet("albumlist", Name = "GetLogsOfAlbumsUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<LogAlbumsOfUserListVm>>> GetLogsOfAlbumsUser(DateTime date)
        {
            var getLogAlbumsOfUserListQuery = new GetLogAlbumsOfUserListQuery() { Date = date };
            var dtos = await _mediator.Send(getLogAlbumsOfUserListQuery);
            return Ok(dtos);
        }

        [HttpGet("photoslist", Name = "GetLogsOfPhotosUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<LogPhotosOfUsersListVm>>> GetLogsOfPhotosUser(DateTime date)
        {
            var getLogPhotosOfUsersListQuery = new GetLogPhotosOfUsersListQuery() { Date = date };
            var dtos = await _mediator.Send(getLogPhotosOfUsersListQuery);
            return Ok(dtos);
        }




    }
}
