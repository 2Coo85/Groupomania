const sql = require('mssql')
const { init } = require('../app')

const dbConfig = sql.createConnection({
    user: 'sa',
    password: 'Mania01',
    host: '2COOLHP',
    database: 'GroupoMania',
    port: 1433
})

var dB = `CREATE DATABASE ${database.name}`
var useDB = `USE ${database.name}`

//Tables
const userTbl = "CREATE TABLE [dbo].[Users] ([Id] INT IDENTITY (1, 1) NOT NULL, [username] NCHAR(10) NOT NULL, [email] NCHAR(50) NOT NULL), [department] NCHAR(20) NOT NULL, [phone] INT NOT NULL, [password] NCHAR(300) NOT NULL, PRIMARY KEY CLUSTERED ([Id] ASC))"

const postTbl = "CREATE TABLE [dbo].[Posts] ([Id] INT IDENTITY (1, 1) NOT NULL, [username] NCHAR(10) NOT NULL, [department] NCHAR(20) NOT NULL, [title] TEXT NOT NULL, [imageUrl] NCHAR(200) NULL, [postText] TEXT NULL, PRIMARY KEY CLUSTERED ([Id] ASC), CONSTRAINT [FK_Posts_Users] FOREIGN KEY ([Id]) REFERENCES [dbo].[Users] ([Id]))"

const commentTbl = "CREATE TABLE [dbo].[Comments] ([Id] INT IDENTITY (1, 1) NOT NULL, [username] NCHAR(10) NOT NULL, [postId] INT NOT NULL, [department] NCHAR(20) NOT NULL, [commentText] TEXT NOT NULL, PRIMARY KEY CLUSTERED ([Id] ASC), CONSTRAINT [FK_Commments_Users] FOREIGN KEY ([Id]) REFERENCES [dbo].[Users] ([Id]), CONSTRAINT [FK_Comments_Posts] FOREIGN KEY ([postId]) REFERENCES [dbo].[Posts] ([Id])"

//Function to create tables
const tableCreation = (query) => {
    return new Promise ((resolve, reject) => {
        try {
            dbConfig.query(query, (err) =>{
                if (err) {
                    return console.error('error:' + err.message)
                }
                resolve (true)
            })
        } catch (error) {
            reject (error)
        }
    })
}

//Database creation function
const dbCreation = (dB) => {
    return new Promise((resolve, reject) => {
        try {
            dbConfig.connect( (err) => {
                if (err) throw err;
                console.log("---")
                console.log("--------- Start of configuration ---------")
                console.log("---")
                console.log("Database configuration in progress .... Please wait...")
                console.log("---")
                console.log("Connection to MSSQL server validated.")
                console.log("---")
                console.log(dB)
                dbConfig.query(dB, (err) => {
                    if (err) {
                        return console.error('error:' + err.message)
                    }
                    console.log("The database has been created.")
                    console.log("---")
                    resolve (true)
                })
            })
        } catch (err) {
            reject (err)
        }
    })
}

//Initialize database configuration
const initDbConfig = () => {
    init = async () => {
        await dbCreation (dB)
        await tableCreation (useDB)

        dbConfig.connect (async (err) => {
            if (err) {
                return console.error('error:' + err.message)
            }
            try {
                await tableCreation (userTbl)
                console.log('User table created successfully')
                console.log("---")

                await tableCreation(postTbl)
                console.log('Post table created successfully')
                console.log("---")

                await tableCreation(commentTbl)
                console.log('Comments table created successfully')
                console.log("---")

                console.log("Database has been configured successfully.")
                console.log("---")
                console.log("--------- End of configuration ---------")
                console.log("---")
            } catch (err) {
                console.error('error:' + err.message)
            }
        })
    }
    init();
}
initDbConfig();