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
