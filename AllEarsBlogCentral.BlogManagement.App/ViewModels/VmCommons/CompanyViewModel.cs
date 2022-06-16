using Newtonsoft.Json;

namespace AllEarsBlogCentral.BlogManagement.App.ViewModels.VmCommons
{
    public class CompanyViewModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("catchPhrase")]
        public string CatchPhrase { get; set; }

        [JsonProperty("bs")]
        public string Bs { get; set; }
    }
}
