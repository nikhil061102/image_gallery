# Image Gallery MERN Stack Project 🖼️

This project is an Image Gallery built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Bootstrap for styling and Multer for image uploading. Users can save and delete images after authentication using JWT (JSON Web Tokens) for sign-in and login.

## About the Project 📝🚀

This project aims to provide a seamless and intuitive platform for users to manage and showcase their images effectively. Leveraging the power of the MERN stack along with Bootstrap and Multer, the Image Gallery project offers a robust solution for image management.

Users can securely sign in and log in using JWT authentication, ensuring data privacy and security throughout their interaction with the platform. With the ability to upload, save, and delete images, users have full control over their digital assets, making it a versatile tool for photographers, artists, and anyone passionate about visual content.

The integration of Bootstrap ensures a responsive and visually appealing interface across various devices, enhancing user experience and accessibility. Whether you're a professional photographer or an amateur enthusiast, the Image Gallery MERN Stack project provides a customizable and feature-rich solution for organizing and showcasing your images effortlessly. 🌟📸

## Features
✅ User authentication with JWT  
✅ Image uploading using Multer  
✅ Save and delete images  
✅ Bootstrap for responsive styling  

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Bootstrap
- Multer
- JWT

### Starting Backend:

1. **Setup Environment Variables**:
   - Create a `.env` file with the following parameters:
     - `MONGO_URI`: URL for MongoDB
     - `JWT_SECRET`: Any string for JWT secret
    - Here I have used :-
        ```
        MONGO_URI=mongodb://127.0.0.1:27017/image_upload
        JWT_SECRET=secretcode
        ```
2. **Navigate to Backend Directory**:
   - Open the main folder in the command prompt.
   - Type `cd backend` to navigate to the backend directory.

3. **Install Dependencies**:
   - Run `npm install` to install all required node_modules.

4. **Start the Server**:
   - Run `node ./server.mjs` to start the server-side application.

### Starting Frontend:

1. **Navigate to Frontend Directory**:
   - Open the main folder in the command prompt.
   - Type `cd frontend` to navigate to the frontend directory.

2. **Install Dependencies**:
   - Run `npm install` to install all required node_modules.

3. **Start the Client**:
   - Run `npm start` to start the client-side application.

4. **Access the Application**:
   - Visit `http://localhost:3000` in your web browser to access the application.
