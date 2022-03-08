FROM node:14.17.5-alpine

RUN npm install -g @angular/cli@13.0.2

USER node

WORKDIR /home/node/app/front/

# COPY package.json .
# COPY package.lock .

# COPY . .

EXPOSE 4200

CMD /home/node/app/front/node_modules/.bin/ng serve --host 0.0.0.0 --disable-host-check
