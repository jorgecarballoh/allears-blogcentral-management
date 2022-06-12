using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure
{
    public interface IAsyncDataService<T> where T : class
    {
    
        Task<List<T>> ListAllAsync();
    }
}
