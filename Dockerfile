FROM node:16.15
WORKDIR /viajar-no-brasil-front
COPY ./package*.json ./
COPY ./.husky ./
RUN npm install
COPY . ./viajar-no-brasil-front
CMD ["npm", "start"]