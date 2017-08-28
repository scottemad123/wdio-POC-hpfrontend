import mysql from "mysql";

module.exports = {
  getConfAckFromDB: async outputId => {
    let connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

    try {
      connection.connect();

      let result = await connection.query(
        `SELECT id, confirmation_ack FROM appointments WHERE id = '${outputId}'`
      );

      console.log(("Raw Result:", result));
      let ack = result[0].confirmation_ack;
      console.log("Just the Ack:", ack);
      return ack;
    } catch (error) {
      throw new Error(error);
    } finally {
      connection.end();
    }
  }
};
