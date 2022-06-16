using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels.VmLogs
{
    public partial class LogPostsOfUserListVm
    {
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; }

        [JsonProperty("level")]
        public string Level { get; set; }

        [JsonProperty("messageTemplate")]
        public string MessageTemplate { get; set; }

        [JsonProperty("properties")]
        public LogPostsProperties Properties { get; set; }
    }

    public partial class LogPostsProperties
    {
        [JsonProperty("postsList")]
        public List<PostsList> PostsList { get; set; }

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

    public partial class PostsList
    {
        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("body")]
        public string Body { get; set; }

        [JsonProperty("userId")]
        public long UserId { get; set; }

        [JsonProperty("comments")]
        public object Comments { get; set; }
    }
}
