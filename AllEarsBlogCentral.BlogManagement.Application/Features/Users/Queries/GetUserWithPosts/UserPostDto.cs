﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Features.Users.Queries.GetUsersListWithPosts
{
    public class UserPostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public int UserId { get; set; }
    }
}
