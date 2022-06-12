using AutoMapper;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;


namespace AllEarsBlogCentral.BlogManagement.Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            services.AddAutoMapper(assemblies);
            services.AddMediatR(assemblies);
            return services;
        }
    }
}
