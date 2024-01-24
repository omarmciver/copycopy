FROM node:21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Second stage for the final image
FROM node:21
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD [ "pnpm", "serve" ]