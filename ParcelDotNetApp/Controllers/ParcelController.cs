using Microsoft.AspNetCore.Mvc;

namespace ParcelDotNetApp.Controllers;

public class ParcelController : Controller
{
    /// <summary>
    /// Serving the Parcel app that way, because if you already have an existing ASP.NET Core web app and want to integrate
    /// a React app into it, keeping the ASP.NET's authentication/authorization and server the app from the custom URL,
    /// that's what you want. In effect, the Parcel app is not a single SPA app, but multiple SPA apps served from
    /// various controllers' actions.
    /// </summary>
    /// <returns></returns>
    public IActionResult Index()
    {
        return View();
    }
}