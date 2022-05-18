const express = require('express')
const app = express()
const mysql = require("mysql2/promise")
const cors = require("cors")

app.use(cors())

app.use("/", async (req,res)=>{

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'lab', // <== ระบุ database ใหถูกตอง
        port: 3306, // <== ใส port ใหถูกตอง (default 3306, MAMP ใช 8889)
    })
    try {
        const data = await connection.query(` select rg.id, rg.first_name, rg.last_name , ad.address , tax.Ident_id
        from register as rg
        left join address as ad on rg.id = ad.register_id 
        left join tax_address as tax on ad.register_id = tax.register_id
        order by rg.id;`);
        res.json(
            data[0]
        );
        await connection.end();
    } catch (error) {
        res.json(error);
    }
    
})

app.listen(3000,()=>{
    console.log("Listen PORT ----> 3000")
})