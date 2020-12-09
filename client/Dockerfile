FROM node:10.16.0-alpine as build-stage

WORKDIR /app

COPY yarn.lock ./
COPY .yarnrc ./
COPY packages ./packages
COPY package*.json ./
RUN yarn

COPY config ./config
COPY public ./public
COPY src ./src
COPY tests ./tests
COPY .eslintrc.js ./
COPY .pug-lintrc.js ./
COPY .stylelintrc.json ./
COPY babel.config.js ./
COPY helper.tsdoc.js ./
COPY jest.config.js ./
COPY postcss.config.js ./
COPY tsconfig.json ./
COPY vue.config.js ./
RUN yarn build

# production-stage
FROM nginx:1.17.0-alpine

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
COPY --from=build-stage /app/dist /usr/share/nginx/html

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
