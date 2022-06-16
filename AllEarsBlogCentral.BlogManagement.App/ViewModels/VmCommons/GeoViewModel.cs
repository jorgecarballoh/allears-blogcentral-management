using Newtonsoft.Json;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels.VmCommons
{
    public partial class GeoViewModel
    {
        [JsonProperty("lat")]
        public string Lat { get; set; }

        [JsonProperty("lng")]
        public string Lng { get; set; }
    }
}
