# -------------------------------------------------------------------
# STAGE 1: Builder
# Builds the Next.js application and generates the static 'out' folder.
# -------------------------------------------------------------------
FROM node:22-slim AS builder

# Set environment variables for production build
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
# This ensures a faster build if dependencies haven't changed
COPY package*.json ./
# Install only production dependencies (dev dependencies are often large and not needed for the build result)
# For static build, this might be overkill, but it's good practice.
RUN npm install

# Copy the rest of the application code
COPY . .

# IMPORTANT: Ensure your next.config.js has 'output: "export"' enabled!
# Build the Next.js application. 
# This runs 'next build', which then uses the 'output: "export"' config 
# to generate the static files in the 'out' directory.
RUN npm run build

# -------------------------------------------------------------------
# STAGE 2: Runner (Serving the Static Files)
# Uses a minimal web server (Nginx) to serve the static content. 
# This final image does *not* contain Node.js, making it small and secure.
# -------------------------------------------------------------------
FROM nginx:alpine AS runner

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy a custom Nginx configuration file
# This assumes you have the 'nginx.conf' file in your project root.
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static exported files from the builder stage's 'out' folder 
# into the Nginx public web root directory.
COPY --from=builder /app/out /usr/share/nginx/html

# The default Nginx port is 80, which is exposed automatically by the image
EXPOSE 80

# Nginx starts automatically
CMD ["nginx", "-g", "daemon off;"]