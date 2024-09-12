export const databaseConfig = () => ({
    dbconconfig:{user:process.env.DBUSERNAME,password: process.env.DBUSERPASS ,connectString:process.env.DBCONNECSTR},
  });