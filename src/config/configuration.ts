export default () => ({
  port: process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3100,
  database: {
    host:
      process.env.TYPEORM_HOST !== undefined
        ? process.env.TYPEORM_HOST
        : 'localhost',
    port:
      process.env.TYPEORM_PORT !== undefined
        ? parseInt(process.env.TYPEORM_PORT, 10)
        : 5432,
  },
});
