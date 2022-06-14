using System.Net.Http;

namespace AllEarsBlogCentral.BlogManagement.App.Services
{
    public partial class Client : IClient
    {
        public HttpClient HttpClient => _httpClient;
    }
}
