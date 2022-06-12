using AllEarsBlogCentral.BlogManagement.Application.Contracts.Infrastructure;
using AllEarsBlogCentral.BlogManagement.Application.Models.API;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services;
using AllEarsBlogCentral.BlogManagement.Infrastructure.Services.Base;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace AllEarsBlogCentral.BlogManagement.Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<APISettings>(configuration.GetSection("APISettings"));

            services.AddScoped(typeof(IAsyncDataService<>), typeof(BaseDataService<>));

            services.AddScoped<IUserDataService, UserDataService>();
             
            return services;
        }
    }
}

