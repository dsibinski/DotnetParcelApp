namespace ParcelDotNetApp;

public class Constants
{
    // Used to make files (bundles) served by the web app not cached by the browser
    // On production, it should not be random - for example an application's version should be used here
    public static string FileRandomHash => Guid.NewGuid().ToString();
}