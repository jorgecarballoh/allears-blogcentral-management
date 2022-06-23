using Microsoft.AspNetCore.Mvc;

namespace AllEarsBlogCentral.BlogManagement.AngularApp.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
