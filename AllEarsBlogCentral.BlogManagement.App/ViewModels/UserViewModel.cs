
using AllEarsBlogCentral.BlogManagement.App.ViewModels.VmCommons;
using Newtonsoft.Json;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels
{
    public partial class UserViewModel
        {
            [JsonProperty("id")]
            public long Id { get; set; }

            [JsonProperty("name")]
            public string Name { get; set; }

            [JsonProperty("username")]
            public string Username { get; set; }

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
        } 
}
