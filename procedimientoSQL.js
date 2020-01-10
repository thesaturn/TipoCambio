var sql = require("mssql");

var config = {
        user: 'sa',
        password: 'gaco3366',
        server: '192.1.1.248',
        database: 'BYM_ECONT',
        options: {
          dateFormat: 'dmy',
          useUTC: true

    }
}
module.exports = {

  funcDolar: async function procedimientoAlmacenadoDolar(prmValor){

                    try{

                      let pool = new sql.ConnectionPool(config);
                      let conn = await pool.connect();
                      let request = await conn.request();
                      request.input("prmValor", sql.VarChar(100),prmValor)
                      request.execute("[dbo].[spECNTI_InsertarDolar]")
                      return request;

                    }

                  catch (err) {
                      console.log(err);
                  }

                },


  funcUF: async function procedimientoAlmacenadoUF(prmValor){

                  try{

                    let pool = new sql.ConnectionPool(config);
                    let conn = await pool.connect();
                    let request = await conn.request();
                    request.input("prmValor", sql.VarChar(100),prmValor)
                    request.execute("[dbo].[spECNTI_InsertarUF]")
                    return request;

                  }

                catch (err) {
                    console.log(err);
                }

        }


}
