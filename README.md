# EyeDropper & File API - Verkefni 10

This project is a simple React application that allows users to upload an image and pick a color from it using the **EyeDropper API**. The selected color is then displayed on the screen with its hex code.

## Project Setup

### Tools and Dependencies

This project was set up using the following tools:

- **Vite**: A fast build tool optimized for modern frontend development, providing quick development and build processes.
- **React**: A JavaScript library for building user interfaces, used here to handle the application's interactive features.
- **ESLint**: A tool for identifying and fixing code quality and style issues in JavaScript.
- **EyeDropper API** and **File API**: Web APIs used to interact with the image and select colors.

### How to Set Up

1. **Install Dependencies**: Clone this repository and run the following command to install the necessary dependencies.
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Lint the Code using Stylelint and eslint**:
   ```bash
   npm run lint
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## How the Web APIs are Used in App.jsx

### File API

The **File API** is used to allow the user to upload an image. The `FileReader` reads the file as a data URL, and the image is then displayed in the app. The `File API` is triggered in the `handleFileUpload` function in `App.jsx`, where the uploaded image file is accessed and read using the following steps:

1. The file is selected from the input (`event.target.files[0]`).
2. A new `FileReader` instance reads the image as a Data URL.
3. The image is displayed in the app using this Data URL.

### EyeDropper API

The **EyeDropper API** allows users to select a color from anywhere on the screen, including the uploaded image. When the image is clicked, the `pickColor` function in `App.jsx` triggers the EyeDropper API, allowing the user to choose a color. The selected color is displayed as a hex code and a colored box.

1. An instance of `EyeDropper` is created in the `pickColor` function.
2. The `open` method activates the color picker, allowing users to pick a color from the displayed image.
3. The resulting color (in hex format) is stored and displayed on the screen.

### Requirements and Compatibility

- The EyeDropper API is supported in most modern browsers like Chrome. If the API is not supported, the app alerts the user.
- Ensure your browser supports both the **File API** and **EyeDropper API** for the application to function fully.
