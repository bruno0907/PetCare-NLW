const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

// db.serialize( () => {    

//     db.run(`
//         CREATE TABLE IF NOT EXISTS cuidadores (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             state TEXT,
//             city TEXT,
//             phone TEXT,
//             email TEXT,
//             facebook TEXT,
//             instagram TEXT,
//             items TEXT
//         );
//     `)
    
//     const query = `
//         INSERT INTO cuidadores (
//             name, 
//             image, 
//             state, 
//             city, 
//             phone, 
//             email, 
//             facebook, 
//             instagram, 
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "John Doe",
//         "https://picsum.photos/200",
//         "Santa Catarina",
//         "Itajaí",
//         "47918273645",
//         "email@cuidador.com.br",
//         "https://www.facebook.com/cuidador",
//         "https://www.instagram.com/cuidador",
//         "Pet Walker, Home Care, Adestrador"
//     ]
//     function afterInsertData(err) {
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastro Efetuado com Sucesso")
//         console.log(this)
//     }
    
//     db.run(query, values, afterInsertData) 
        
    // db.run(`DELETE FROM cuidadores`, function (err){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Todos os registros removidos")        
    // })

    // db.run(`DROP TABLE cuidadores`, function (err){
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Tabela removida")        
    // })
    
    
    
//     db.all(`SELECT * FROM cuidadores`, function(err, rows){
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Registros atuais do DB")
//         console.log(rows)
//     }) 
    
// })

module.exports = db