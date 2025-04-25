# Navi App

A simple Node.js web application ready for Coolify deployment.

## Features

- Express.js server
- Modern UI with gradient background
- Example API endpoint
- Docker support for Coolify deployment

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Deployment on Coolify

1. Push your code to a Git repository
2. In Coolify:
   - Create a new application
   - Select "Docker" as the deployment method
   - Connect your Git repository
   - Set the build context to the root directory
   - Deploy!

## Environment Variables

- `PORT`: Server port (default: 3000)

## Project Structure

```
.
├── src/
│   ├── index.js
│   └── public/
│       └── index.html
├── package.json
├── Dockerfile
└── README.md
``` 