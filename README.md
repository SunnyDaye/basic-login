# Basic Login
## Table of connects
 - [1.0 Overview](#10-overview)
   - [1.1 Description](#11-description)
   - [1.2 Technologies](#12-technologies)
   - [1.3 Features](#13-features)
     - [1.3.1 Home page](#131-home-page)
     - [1.3.2 Register](#132-register)
     - [1.3.3 Login](#133-login)
     - [1.3.4 Dashboard](#134-dashboard)
 - [2.0 How to Use](#20-how-to-use)
 - [3.0 License](#30-license)
## 1.0 Overview
Check out this project [here](http://www.sunceriedaye.com:84)!
### 1.1 Description
Basic Login is a server side rendered application that allowss users to login and see their dashsboard. See [Features](#13-Features) for details.
### 1.2 Technologies
This API was built using EJS ,Node.js, Expess.js, and PostgresSQL.
### 1.3 Features
#### 1.3.1 Home page
This is a landing page for all users to see.
#### 1.3.2 Register
This page allows users to submit their information to create an account to login.
#### 1.3.3 Login
This page allows registered users to submit their email and password to login in and see their dashboard.
#### 1.3.4 Dashboard
This page verifies that a registered user has logged in.

## 2.0 How to Use
Feel free to incorporate this API in your full stack project! Also, feel free to fork and make edits.
1. Clone repo
2. ```npm install``` to install depedencies
3. Create a `.env` file in the root directory of the project
4. Inside the `.env` file, set ```PORT``` to what ever port you want the project to run on. Then set ```CONNECTION_URL``` to the url of your database. Finally, set ```SECRET``` to a long random string. Save the file.
6. Run ```npm start``` to run the API locally
7. ENJOY!
## 3.0 License 
MIT License

Copyright (c) 2023 by Suncerie Daye

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.