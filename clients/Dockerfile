# Use the official Node.js image as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use serve to serve the build
RUN npm install -g serve

# Start the app
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
