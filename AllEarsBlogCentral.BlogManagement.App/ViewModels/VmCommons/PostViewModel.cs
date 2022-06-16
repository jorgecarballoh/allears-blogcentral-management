using Newtonsoft.Json;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels.VmCommons
{
    public partial class PostViewModel
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
