FROM node:lts-alpine AS builder

ENV NEXT_PUBLIC_GOOGLE_ANALYTICS='G-B52Z1GBNX6'
ENV SITE_URL='https://cook.zhangjc.tech'
ENV DISABLE_PWA=false
ENV NEXT_PUBLIC_BAIDU_TRACE='6e2089c7a44e91b7a6fab00626c1fb08'

RUN apk update
WORKDIR /app
COPY . .
COPY .env.docker .env

RUN npm install && npm run export

FROM nginx:stable-alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80