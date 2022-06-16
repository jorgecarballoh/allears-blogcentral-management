using AllEarsBlogCentral.BlogManagement.App.ViewModels.VmCommons;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels.VmLogs
{
    public partial class LogUsersListVm
    {
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; }

        [JsonProperty("level")]
        public string Level { get; set; }

        [JsonProperty("messageTemplate")]
        public string MessageTemplate { get; set; }

        [JsonProperty("properties")]
        public UserLogProperties Properties { get; set; }
    }

    public partial class UserLogProperties
    {
        [JsonProperty("usersList")]
        public List<UsersList> UsersList { get; set; }

        [JsonProperty("sourceContext")]
        public string SourceContext { get; set; }

        [JsonProperty("actionId")]
        public Guid ActionId { get; set; }

        [JsonProperty("actionName")]
        public string ActionName { get; set; }

        [JsonProperty("requestId")]
        public Guid RequestId { get; set; }

        [JsonProperty("requestPath")]
        public string RequestPath { get; set; }
    }

    public partial class UsersList
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
        public object Posts { get; set; }

        [JsonProperty("albums")]
        public object Albums { get; set; }
    }
}
