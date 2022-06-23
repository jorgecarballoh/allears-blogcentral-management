using Microsoft.AspNetCore.Mvc;

namespace AllEarsBlogCentral.BlogManagement.AngularApp.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
