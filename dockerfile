FROM node:22-alpine

RUN npm install -g pnpm@8 serve

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN  pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]