# Job-Tube 🚀

## Your Intelligent Command Center for Job Applications

<img width="1920" height="943" alt="job-tube-home" src="https://github.com/user-attachments/assets/0f7d26f9-6729-468c-94a9-a0d4b87d09ee" />


## Table of Contents

- [About Job-Tube](#about-job-tube)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation (Frontend)](#installation-frontend)
- [Installation (Backend)](#installation-backend)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About Job-Tube

Job-Tube is a modern, full-stack web application meticulously crafted to empower job seekers. In today's competitive landscape, staying organized is key to success. Job-Tube provides a centralized, intuitive platform to track every aspect of your job hunt – from initial application submission to interview scheduling and offer management.

**Key Problems Job-Tube Solves:**

* **Application Overload:** Never lose track of an application again, regardless of volume.
* **Status Clarity:** Easily monitor the progress of each application with clear, up-to-date statuses.
* **Centralized Information:** Keep all your job-related data (companies, jobs, applications, users) neatly organized in one place.
* **Insightful Overview:** Gain quick insights into your job search activity through a concise dashboard.

## Features

✨ **Core Features Designed for Your Success:**

* **Secure User Authentication:** Robust login and registration system powered by JWT for secure access.
* **Intuitive Dashboard:** A personalized overview of your application statistics, pending interviews, and overall progress.
* **Comprehensive Application Tracking:** Add, view, edit, and update the status of individual job applications (e.g., Applied, Interview, Offer, Rejected).
* **Company Management:** Efficiently manage details for each company you've applied to or are interested in.
* **Job Posting & Browse:** (If users can post jobs or browse a list of jobs) Easily post new job listings or browse available positions.
* **Profile Management:** Update your user profile, including (potentially) profile pictures or resumes.

## Live Demo

Experience Job-Tube firsthand!

* **Frontend Application:** [https://job-tube.onrender.com](https://job-tube.onrender.com)
* **Backend API (Endpoint):** [https://job-tube-api.onrender.com](https://job-tube-api.onrender.com) (This is the API server's base URL, not a browsable UI)

## Technologies Used

Job-Tube leverages a modern MERN stack to deliver a responsive, scalable, and robust user experience.

**Frontend:**
* [React.js](https://react.dev/) - For building dynamic and reactive user interfaces.
* [React Router Dom](https://reactrouter.com/en/main) - Declarative routing for seamless navigation.
*  [**React Redux**](https://react-redux.js.org/) - Official React bindings for Redux.
* [**Redux Toolkit**](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient state amnagement.
* [Axios](https://axios-http.com/) - Efficient HTTP client for API interactions.
* [Styled Components](https://styled-components.com/) - For component-based styling.
* [Recharts](https://recharts.org/en-US/) - For building powerful charts on the dashboard.
* [React Icons](https://react-icons.github.io/react-icons/) - For a wide array of popular icon libraries.
* [Formik / Yup](https://formik.org/) - (Add if you use it for forms/validation) For robust form management and validation.

**Backend:**
* [Node.js](https://nodejs.org/en) - The JavaScript runtime environment.
* [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MongoDB](https://www.mongodb.com/) - A flexible, scalable NoSQL database.
* [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js.
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For secure JWT-based user authentication.
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - For robust password hashing.
* [cors](https://www.npmjs.com/package/cors) - Node.js middleware for Cross-Origin Resource Sharing.
* [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Middleware to parse cookie headers.
* [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables.
* [multer](https://github.com/expressjs/multer) - (Observed via `singleUpload` middleware) For handling `multipart/form-data`, primarily for file uploads (like profile pictures).
* [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) - (Add if you use it) For basic API rate limiting.

**Deployment:**
* **Frontend:** [Render.com](https://render.com/)
* **Backend:** [Render.com](https://render.com/)

## Getting Started

To run Job-Tube locally, follow these instructions. You will need both the frontend and backend repositories.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn
* A MongoDB database (e.g., a free tier cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation (Frontend)

1.  **Clone the frontend repository:**
    ```bash
    git clone https://github.com/SahilSahu731/Job_tube/frontend
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Create a `.env` file** in the root of the frontend directory and add your backend API URL. Make sure it points to your deployed backend or your local backend if running locally:
    ```
    VITE_APP_API_URL=[https://job-tube-api.onrender.com/api/v1](https://job-tube-api.onrender.com/api/v1)
    # For local development: REACT_APP_API_URL=http://localhost:5000/api/v1
    ```
    *(This `REACT_APP_API_URL` should correctly match the base path you use in your Axios instance on the frontend, which typically includes the `/api/v1` prefix.)*
4.  **Start the development server:**
    ```bash
    npm start # or yarn start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

### Installation (Backend)

1.  **Clone the backend repository:**
    ```bash
    git clone https://github.com/SahilSahu731/Job_tube/backend
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Create a `.env` file** in the root of the backend directory and configure your environment variables:
    ```
    PORT=5000
    MONGO_URI=[Your MongoDB Atlas Connection String - e.g., mongodb+srv://user:pass@cluster.mongodb.net/jobtube?retryWrites=true&w=majority]
    JWT_SECRET=[A strong, random secret string for JWT signing]
    FRONTEND_URL=[https://job-tube.onrender.com](https://job-tube.onrender.com) # Your deployed frontend URL for CORS
    ```
    * **MongoDB Atlas Connection String:** Obtain this from your MongoDB Atlas dashboard.
    * **JWT_SECRET:** Generate a long, complex, random string (e.g., using `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` in your terminal).
4.  **Start the development server:**
    ```bash
    npm run dev # Or use 'node server.js' if you don't have a dev script
    ```
    The backend API server will typically run on `http://localhost:5000`.

## API Endpoints

Job-Tube's backend exposes a RESTful API for seamless interaction. All endpoints are prefixed with `/api/v1`.

| Method | Base Path       | Endpoint              | Description                                  | Authentication Required |
| :----- | :-------------- | :-------------------- | :------------------------------------------- | :---------------------- |
| `POST` | `/user`         | `/register`           | Register a new user (with optional image upload) | No                      |
| `POST` | `/user`         | `/login`              | Authenticate user and establish session      | No                      |
| `POST` | `/user`         | `/profile/update`     | Update authenticated user's profile (with optional image upload) | Yes                     |
| `POST` | `/user`         | `/logout`             | Log out the authenticated user               | Yes                     |
| `GET`  | `/company`      | `/get`                | Get all companies associated with the user   | Yes                     |
| `POST` | `/company`      | `/register`           | Register/Add a new company to track          | Yes                     |
| `GET`  | `/company`      | `/get/:id`            | Get details for a specific company by ID     | Yes                     |
| `PUT`  | `/company`      | `/update/:id`         | Update details for a specific company by ID (with optional image upload) | Yes                     |
| `POST` | `/job`          | `/post`               | Post a new job listing                       | Yes                     |
| `GET`  | `/job`          | `/get`                | Get all available job listings (publicly accessible) | No                      |
| `GET`  | `/job`          | `/get/:id`            | Get details for a specific job by ID         | Yes                     |
| `GET`  | `/job`          | `/getadminjobs`       | Get all job listings posted by the admin     | Yes                     |
| `GET`  | `/application`  | `/apply/:id`          | Apply for a specific job by its ID           | Yes                     |
| `GET`  | `/application`  | `/get`                | Get all job applications for the user        | Yes                     |
| `GET`  | `/application`  | `/:id/applicants`     | Get applicants for a specific job by ID      | Yes                     |
| `POST` | `/application`  | `/status/:id/update`  | Update the status of a specific job application by ID | Yes                     |
| `GET`  | `/dashboard`    | `/stats`              | Get dashboard statistics (e.g., application count by status) | Yes |
| `GET`  | `/interview`    | `/get`                | Get all interviews for the user              | Yes                     |
| `POST` | `/interview`    | `/post`               | Schedule a new interview                     | Yes                     |
| `GET`  | `/interview`    | `/get/:id`            | Get details for a specific interview by ID   | Yes                     |
| `PUT`  | `/interview`    | `/update/:id`         | Update an interview's details                | Yes                     |
| `DELETE`|`/interview`    | `/delete/:id`         | Delete an interview by ID                    | Yes                     |


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See the `LICENSE` file in the repository for more details.

## Contact

**Crucial Steps for You:
[Sahil Sahu] - [sahilsahu731709@gmail.com] - [https://www.linkedin.com/in/sahilsahu731]

Project Link: [https://github.com/SahilSahu731/Job_tube]

---
