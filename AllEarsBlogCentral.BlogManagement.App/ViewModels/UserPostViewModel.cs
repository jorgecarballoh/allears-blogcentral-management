using Newtonsoft.Json;
using System.Collections.Generic;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels
{
    
        public partial class UserPostViewModel
        {
            [JsonProperty("id")]
            public long Id { get; set; }

            [JsonProperty("name")]
            public string Name { get; set; }

            [JsonProperty("userName")]
            public string UserName { get; set; }

            [JsonProperty("email")]
            public string Email { get; set; }

            [JsonProperty("address")]
            public AddressViewModel Address { get; set; }

            [JsonProperty("phone")]
            public string Phone { get; set; }

            [JsonProperty("website")]
            public string Website { get; set; }

            [JsonProperty("company")]
            public CompanyViewModel Company { get; set; }

            [JsonProperty("posts")]
            public List<Post> Posts { get; set; }
        }
     
        public partial class Post
        {
            [JsonProperty("id")]
            public long Id { get; set; }

            [JsonProperty("title")]
            public string Title { get; set; }

            [JsonProperty("body")]
            public string Body { get; set; }

            [JsonProperty("userId")]
            public long UserId { get; set; }
        }
    }


