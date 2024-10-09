# Overview
This project is a **User Authentication System** built using **HTML, JavaScript, PHP**, and a combination of **MySQL** and **MongoDB** databases. It provides basic functionality for user registration, login, and profile management. Users can sign up, log in, and update their profile details. The frontend is designed using Bootstrap for styling, while the backend handles data storage in MySQL for login credentials and MongoDB for additional user information.

# Technologies & Tools
- **Frontend**: HTML, JavaScript, Bootstrap
- **Backend**: PHP
- **Databases**: 
  - **MySQL** for storing user credentials.
  - **MongoDB** for storing additional user details like interests and location.
- **AJAX**: For handling asynchronous data requests to PHP scripts.

# Features
- **User Registration**: Allows users to create a new account by providing a username (email) and password.
- **Login Functionality**: Verifies user credentials from the MySQL database, and upon successful login, redirects the user to their profile page.
- **Profile Management**: Users can view and update their profile information (location, interests) stored in MongoDB.
- **AJAX Integration**: Uses AJAX for smooth, asynchronous updates of registration, login, and profile updates without reloading the page.
# How project works 

### Explanation of the Structure:
1. **HTML Files**:
   - `register.html`: Frontend for user registration.
   - `login.html`: Frontend for user login.
   - `profile.html`: Frontend for user profile management.
   
2. **JavaScript Files**:
   - `register.js`: Handles the form submission and registration logic via AJAX.
   - `login.js`: Manages the login process and redirects upon successful login.
   - `profile.js`: Fetches and updates user profile information from MongoDB.

3. **PHP Files**:
   - `register.php`: Backend logic to store user registration data in MySQL and MongoDB.
   - `login.php`: Backend logic for user authentication by verifying credentials.
   - `profile.php`: Backend logic for retrieving and updating user information.

4. **Vendor Folder**:
   - This typically contains third-party libraries, such as the MongoDB PHP driver for interacting with MongoDB.

5. **README.md**:
   - The documentation file that explains the project, its structure, and instructions for setup and usage.

6. **.gitignore**:
   - Contains files or directories that should not be included in the version control (e.g., sensitive files or unnecessary build files).

This structure keeps your project organized, making it easier for others (and yourself) to navigate and understand the components involved.
