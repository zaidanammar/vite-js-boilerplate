# Builder Stage
FROM node:18-alpine AS builder

ARG VITE_APP_NAME
ARG VITE_API_URL
ARG VITE_DEPLOY_CONTEXT

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

# Build the Vite application
RUN pnpm run build

# Final Stage
FROM node:18-alpine

ARG USERNAME=posy
ARG GROUPNAME=$USERNAME
ARG USER_UID=1002
ARG GROUP_GID=$USER_UID

RUN apk update \
    && apk --no-cache add shadow curl \
    && groupadd -r -g $GROUP_GID $GROUPNAME \
    && useradd -m -d /home/$USERNAME/ -s /bin/sh -u $USER_UID -r -g $GROUPNAME $USERNAME

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN chown -R posy: /app
USER posy
EXPOSE 3000

CMD ["pnpm", "run", "serve"]
