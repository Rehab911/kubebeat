# Step 1: Use an official, lightweight Node.js runtime as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first to cache dependencies
COPY package*.json ./

# Step 4: Install only production dependencies to keep the image small
RUN npm ci --only=production

# Step 5: Copy the rest of the backend source code and your audio assets
COPY . .

# Step 6: Expose the port your Express app listens on (change 3000 to your app's port)
EXPOSE 3000

# Step 7: Define the command to start your streaming service
CMD ["node", "server.js"]