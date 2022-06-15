using Newtonsoft.Json;
using System.Collections.Generic;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels
{
    public class AlbumViewModel
    {
        [JsonProperty("userId")]
        public long UserId { get; set; }

        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("photos")]
        public List<PhotoViewModel> Photos { get; set; }
    }
}
