@echo off
start cmd /k "cd docker && docker-compose -f docker-compose.base.yaml up -d"
start cmd /k "cd auth-service && yarn start:dev"
start cmd /k "cd notify-service && yarn start:dev"
start cmd /k "cd redis-service && yarn start:dev"
echo All services started!
