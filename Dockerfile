# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Ensure @popperjs/core is installed
RUN npm install @popperjs/core

# Fix babel-preset-react-app issue by adding @babel/plugin-proposal-private-property-in-object to devDependencies
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install @mui/material @emotion/react @emotion/styled

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the build directory
RUN npm install -g serve

# Set the command to serve the app
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000
