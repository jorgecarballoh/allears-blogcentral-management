using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AllEarsBlogCentral.BlogManagement.Infrastructure.Utilities
{
    public class FileManager
    {
        private readonly IHostingEnvironment _environment;

        public FileManager(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        public string GetFileLogSourceTemp(string date)
        {
            var fileName = Directory.GetFiles("Logs", "*.json").Where(x => x.Contains(date)).FirstOrDefault();

            var source = Path.Combine(_environment.ContentRootPath, $"{fileName}");

            var tempSource = Path.Combine($"{_environment.ContentRootPath}\\Logs", $"tempData.json");

            DropFileTemp(tempSource);

            File.Copy(source, tempSource);

            return tempSource;
        }

        public static void DropFileTemp(string tempSource)
        {
            if (File.Exists(tempSource)) File.Delete(tempSource);
        }

        public async Task<string[]> ReadAllLineFromLogsFileByDate(string date)
        {
            var tempSource = GetFileLogSourceTemp(date);
            return await File.ReadAllLinesAsync(tempSource);
        }
    }
}
