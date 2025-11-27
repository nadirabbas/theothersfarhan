FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

# Install everything (dev + prod), needed for building Next.js
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine AS runner

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
