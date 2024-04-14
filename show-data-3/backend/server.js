import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

const connection = mysql.createConnection({
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: 'lOUyjoBLuShJPahHwhQKJREBSKSSKmZb',
    database: 'railway',
    port: 36966
})

connection.connect()

app.get('/data', (req, res)=>{
    connection.query('SELECT * FROM products', (error, results)=>{
        if(error){
            res.status(500).json({error: 'Error al obtener datos de la base de datos'})
        } else {
            res.json(results)
        }
    })
})

app.listen(port, ()=> {
    console.log(`Server running http://localhost:${port}/data`);
})