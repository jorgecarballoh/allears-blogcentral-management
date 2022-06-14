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

            //builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
            builder.Services.AddBlazoredLocalStorage();
             
            builder.Services.AddSingleton(new HttpClient
            {
                BaseAddress = new Uri("https://localhost:5001")
            });

            builder.Services.AddHttpClient<IClient, Client>(client => client.BaseAddress = new Uri("https://localhost:5001"));

            builder.Services.AddScoped<IUserDataService, UserDataService>();
            builder.Services.AddScoped<IPostDataService, PostDataService>();
            //builder.Services.AddScoped<ILogDataService, LogDataService>();
       


            await builder.Build().RunAsync();
        }
    }
}
