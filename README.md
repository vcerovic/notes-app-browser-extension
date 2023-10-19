# Notes App Browser Extension
![Notes App Thumbnail](https://i.imgur.com/mpMy6XS.png)

## About

This is a code repository built for article ["Build a Cross-Browser Extension with Plasmo Framework"](https://veljkocerovic.com/blog/build-a-cross-browser-extension-with-plasmo-framework). 

I used [Plasmo Framework](https://github.com/PlasmoHQ/plasmo) to craft a cross-browser extension enabling users to save notes from any website.

### Features
-   Registration and login. 🔓
-   Read and delete notes. 📖
-   Save notes on any website. 💾
-   Access saved notes on visited websites. 📒

### Demo
![Notes App Demo Video](https://i.imgur.com/R10KqIF.gif)

## Getting Started

### Back-end setup
Before using this browser extension, you will need to set up the back-end. You can do this using Docker with the following commands:

```sh
docker pull vcerovic/notes-app
docker run -e JWT_SECRET_KEY=yourkey -e JWT_EXPIRATION=86400000 -p 8081:8081 -d vcerovic/notes-app
```

### Browser extension setup

To set up the browser extension to the following:

1. Clone the repository
2. Install all dependencies with `npm install`
3. Create `.env` file, and add `PLASMO_PUBLIC_API_URL=http://localhost:8081/api/v1`
4. Then build the app with `npm run dev`
5. Open a new chrome tab and enter `chrome://extensions/` in your address bar.
6. Enable "Developer mode."
7. Click on `Load unpacked`.
8. Select the `chrome-mv3-dev` folder from your project.

## Article
For more details on how I built this browser extension using the Plasmo Framework and React, please check out this [blog post](https://veljkocerovic.com/blog/build-a-cross-browser-extension-with-plasmo-framework).
