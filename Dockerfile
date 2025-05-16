# Start your image with a node base image
FROM node:21

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package.json webpack.mix.js ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./docs ./docs

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install \
	&& npm run prod \
	&& rm -fr node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "mix"]