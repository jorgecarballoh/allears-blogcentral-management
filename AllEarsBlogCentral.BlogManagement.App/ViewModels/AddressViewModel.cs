using Newtonsoft.Json;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels
{
    public class AddressViewModel
    {
        [JsonProperty("street")]
        public string Street { get; set; }

        [JsonProperty("suite")]
        public string Suite { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("zipCode")]
        public string ZipCode { get; set; }

        [JsonProperty("geo")]
        public GeoViewModel Geo { get; set; }
    }
}
