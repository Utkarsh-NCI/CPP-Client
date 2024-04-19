FROM node:alpine AS builder
RUN cd client
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next .
EXPOSE 3000

CMD [ "npm", "start" ]
