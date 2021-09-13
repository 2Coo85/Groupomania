const sql = require('mssql/msnodesqlv8')

const dbConfig = new sql.ConnectionPool({
    user: 'sa',
    password: 'Mania01',
    server: '2COOLHP',
    database: 'GroupoMania',
    dialect: 'mssql',
    driver: 'msnodesqlv8',
    instanceName: 'SQLEXPRESS'
})
 
dbConfig.connect(
    (err) => {
        if (err) {
            console.error('error connecting to database: ' + err)
            return  
        }
        console.log('Connected to Database')
    }
)

module.exports = dbConfig