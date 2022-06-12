using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Posts.Queries.GetPostsList
{
    public class GetPostsListQueryHandler : IRequestHandler<GetPostsListQuery, List<PostListVm>>
    {
        private readonly IPostDataService _postService;
        private readonly IMapper _mapper;
        
        public GetPostsListQueryHandler(IPostDataService postService,IMapper mapper)
        {
            _mapper = mapper;
            _postService = postService;
        }

        public async Task<List<PostListVm>> Handle(GetPostsListQuery request, CancellationToken cancellationToken)
        {
            var allPosts = (await _postService.GetPostsList()).OrderBy(x => x.Id);
            return _mapper.Map<List<PostListVm>>(allPosts);
        }
    }
}
