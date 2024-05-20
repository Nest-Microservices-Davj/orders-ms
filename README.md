# Orders Microservice

```docker compose up -d```

## Development steps

1. Clone repository
2. Create the `.env` file using the `.env.template` file
3. Start the BD with `docker compose up -d`
4. Start NATS server 
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Start the project with `npm run start:dev`