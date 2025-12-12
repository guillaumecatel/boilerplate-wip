# Base
ARG NODE_VERSION="24"

FROM node:${NODE_VERSION}-alpine AS base
RUN apk add --no-cache libc6-compat
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Builds
# FROM base AS {{projectName}}_build
# COPY . /usr/src/app
# WORKDIR /usr/src/app
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
#   pnpm install --filter "{{projectName}}..." --frozen-lockfile --ignore-scripts
# RUN pnpm run build --filter "{{projectName}}"
# RUN pnpm deploy --filter "{{projectName}}" --prod "/prod/{{projectName}}"

# Productions
# FROM base AS {{projectName}}_production
# ENV NODE_ENV=production
# WORKDIR /prod/{{projectName}}
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 astrojs
# COPY --from={{projectName}}_build --chown={{projectName}}:nodejs /prod/{{projectName}}/dist ./dist
# COPY --from={{projectName}}_build --chown={{projectName}}:nodejs /prod/{{projectName}}/node_modules ./node_modules
# COPY --from={{projectName}}_build --chown={{projectName}}:nodejs /prod/{{projectName}}/server.js ./server.js
# RUN chmod -R a-w+x /prod/{{projectName}} && chmod -R a+x /prod/{{projectName}}/dist /prod/{{projectName}}/node_modules
# USER {{projectName}}:nodejs
# EXPOSE 3002
# ENV PORT=3002
# CMD ["node", "server.js"]
