# Quotes of the Day

Welcome to the "Quotes of the Day" website project! This application provides daily inspirational quotes to users, allowing them to start their day with a positive mindset. The project is built using modern web development technologies and is fully responsive.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Demo
Check out the live demo [here](https://techplement-quotes-app.vercel.app/).

## Features
- Daily inspirational quotes
- User authentication (login and signup)
- Responsive design
- Fast loading and seamless user experience

## Technologies Used
### Frontend:
- HTML
- CSS
- React.js
- Tailwind CSS

### Backend:
- Node.js
- Express.js

### Deployment:
- Vercel

## Installation
To run this project locally, follow these steps:

### Clone the repository
```bash
git clone https://github.com/your-username/quotes-of-the-day.git
cd quotes-of-the-day
```

### Install dependencies
#### For the frontend:
```bash
cd frontend
npm install
```

#### For the backend:
```bash
cd ../backend
npm install
```

## Usage
### Running the frontend
```bash
cd frontend
npm start
```
This will start the frontend server at `http://localhost:3000`.

### Running the backend
```bash
cd backend
npm start
```
This will start the backend server at `http://localhost:5000`.

## API Endpoints
### Authentication
- **POST** `/api/auth/signup`: User signup
- **POST** `/api/auth/login`: User login

### Quotes
- **GET** `/api/quotes/today`: Get today's quote

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements, bug fixes, or additional features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
