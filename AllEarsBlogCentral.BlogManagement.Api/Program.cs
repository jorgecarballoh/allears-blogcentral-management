using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Events;
using Serilog.Formatting.Compact;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Api
{
    public class Program
    { 
        public  static void Main(string[] args)
        { 
             
            try
            {
                var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

                Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(config)
                                                   .MinimumLevel.Information()
                                                   .CreateLogger();

                Log.Information("Application Starting");
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "An error occured while starting the application");
            }
            finally
            {
                Log.CloseAndFlush();
            }



        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
