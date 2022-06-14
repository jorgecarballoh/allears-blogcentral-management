using System.Net.Http;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public partial interface IClient
    {
        public HttpClient HttpClient { get; }

    }
}
