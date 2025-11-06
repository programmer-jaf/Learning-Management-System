import pino, { Logger } from 'pino';

// Determine environment
const isProduction = process.env.NODE_ENV === 'production';

// Create logger
export const logger: Logger = pino({
  level: isProduction ? 'info' : 'debug', // debug in dev, info in prod
  transport: !isProduction
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
  formatters: {
    level(label) {
      return { level: label };
    },
  },
});

