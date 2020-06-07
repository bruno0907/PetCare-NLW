const express = require("express")
const server = express()

const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Cuidamos do seu Pet!"})
})

server.get("/quem-somos", (req, res) => {
    return res.render("quem-somos.html", {title: "Quem Somos"})
})

server.get("/create-point", (req, res) => {    
    return res.render("create-point.html")
})

server.post("/save-point", (req, res)  => {

    if (!req.body.serviceSelection){                       
        return res.render("create-point.html", {
            success:true,
            image: "/assets/error.svg",
            message1: "Houve um erro com o seu cadastro!!!",  
            message2: "Você precisa selecionar ao menos um serviço prestado para se cadastrar na plataforma...",
            redirect: "/create-point"  
        })            
    }
    db.run(`
        CREATE TABLE IF NOT EXISTS cuidadores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            state TEXT,
            city TEXT,
            phone TEXT,
            email TEXT,
            facebook TEXT,
            instagram TEXT,
            serviceSelection TEXT
        );
    `)

    const query = `
        INSERT INTO cuidadores (
            name, 
            image, 
            state, 
            city, 
            phone, 
            email, 
            facebook, 
            instagram, 
            serviceSelection
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.state,
        req.body.city,
        req.body.phone,
        req.body.email,
        req.body.facebook,
        req.body.instagram,
        req.body.serviceSelection
    ]

    function afterInsertData(err) {
        if(err){            
            console.log("Houve um erro no cadastro no db.run!")
            console.log(err)
            
            return res.render("create-point.html", {
                success:true,
                image: "/assets/error.svg",
                message1: "Houve um erro com o seu cadastro!!!",  
                message2: "Preencha os campos corretamente ou tente novamente mais tarde...",  
                redirect: "/create-point"  
            })            
        }
        console.log("Cadastro Efetuado com Sucesso")
        return res.render("create-point.html", {
            success:true,
            image: "/assets/success.svg",
            message1: "Cadastro Efetuado com Sucesso!!!",
            message2: "Aguarde, você será direcionado automaticamente em 2 segundos...",
            redirect: "/"
        })
    }        
    db.run(query, values, afterInsertData)  
})

server.get("/search-results", (req, res) => {
    const search = req.query.citySearch

    if (!search){
        return res.render("search-results.html")
    }
    db.all(`SELECT * FROM cuidadores WHERE city LIKE '%${search}%'`, function(err, rows){
        if (err) {
            return console.log(err)
        }        
        totalCuidadores = rows.length
        return res.render("search-results.html", {cuidadores: rows, totalCuidadores})
    })      
})

server.listen(8000)
