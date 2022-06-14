using Blazored.LocalStorage;

namespace AllEarsBlogCentral.BlogManagement.App.Services.Base
{
    public class BaseDataService
    {
        protected readonly ILocalStorageService _localStorage;

        protected IClient _client;

        public BaseDataService(ILocalStorageService localStorage, IClient client)
        {
            _localStorage = localStorage;
            _client = client;
        }
    }
}
