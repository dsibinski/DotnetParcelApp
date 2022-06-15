# DotnetParcelApp
This is a sample .NET 6 + Parcel application

Created for the purpose of https://github.com/parcel-bundler/parcel/issues/8206

#Prerequisites
dotnet 6
node +  npm

# How to run
Download the source code. Then go to `ParcelDotNetApp` project folder and execcute:

`dotnet run`

It should run the web app:

![image](https://user-images.githubusercontent.com/7132073/173737783-2eb2ebe7-fed5-4ef3-92ed-7cec66c9e537.png)

Go to the application's URL. You should see the web app there.

Parcel application is available under `/Parcel` (or by clicking the "Parcel app" header menu item):
![image](https://user-images.githubusercontent.com/7132073/173737848-eca23799-a6a2-438c-b3e3-c746577d903a.png)

In order to use Parcel watch, go to `ParcelDotNetApp/ParcelApp` and execute:

`npm run watch`

It should run the app in watch mode:

![image](https://user-images.githubusercontent.com/7132073/173737973-f8a4dee0-c324-4bb3-8af3-4fa3492c69fe.png)

Refresh the page with the application. Since this moment, as soon as you make any changes in the Parcel app's file (e.g. `LandingPage.tsx`), the application will be automatically hot-reloaded.
