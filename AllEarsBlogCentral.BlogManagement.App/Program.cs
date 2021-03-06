using AllEarsBlogCentral.BlogManagement.App.Contracts;
using AllEarsBlogCentral.BlogManagement.App.Services;
using AutoMapper;
using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.App
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            builder.Services.AddAutoMapper(assemblies);
            builder.Services.AddBlazoredLocalStorage();
             
            builder.Services.AddHttpClient<IUserDataService,UserDataService>(client => client.BaseAddress = new Uri("https://localhost:44323/"));
            builder.Services.AddHttpClient<IPostDataService,PostDataService>(client => client.BaseAddress = new Uri("https://localhost:44323/"));
            builder.Services.AddHttpClient<ILogDataService,LogDataService>(client => client.BaseAddress = new Uri("https://localhost:44323/"));

            await builder.Build().RunAsync();
        }
    }
}
