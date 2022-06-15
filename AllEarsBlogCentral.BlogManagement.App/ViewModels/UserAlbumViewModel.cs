﻿using Newtonsoft.Json;
using System.Collections.Generic;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels
{
  
        public partial class UserAlbumViewModel
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

            [JsonProperty("albums")]
            public List<AlbumViewModel> Albums { get; set; }
        }
     
    }


