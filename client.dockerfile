FROM node:8.16-alpine

WORKDIR /app
COPY ./client /app 

RUN apk --no-cache update \
    && apk add curl

CMD /app/entrypoint.sh
