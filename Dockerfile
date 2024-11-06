# Use the base image
FROM node:current-alpine3.20 as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

# Builder stage to create the production build
FROM base as builder
WORKDIR /app
COPY . .
RUN npm ci  # Install dependencies in clean environment
RUN npm run build  # Build Next.js for production

# Production stage to serve the app
FROM base as production
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Set up a non-root user and permissions
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
USER nextjs

CMD ["npm", "start"]

# Development stage
FROM base as dev
WORKDIR /app
ENV NODE_ENV=development
COPY . .
RUN npm install --force
CMD ["npm", "run", "dev"]

