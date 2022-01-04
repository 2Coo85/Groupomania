const sql = require('mssql/msnodesqlv8')

const dbConfig = new sql.ConnectionPool({
    server: '2COOLHP',
    dialect: 'mssql',
    driver: 'msnodesqlv8',
    instanceName: 'MSSQLSERVER',
    user: 'sa',
    password: 'Mania01',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
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