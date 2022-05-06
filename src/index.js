const express = require("express")
const app = express()
const path = require("path")

app.set("port",3000)

app.get("/app",(req, res) => {
    res.sendFile(path.join(__dirname,"templates/prueba.html"))
})

app.get("/saludar",(req, res) => {
    const valor = "hola"
    res.send(valor)
})

app.get("/adios",(req, res) => {
    res.send("Adios")
})

app.listen(app.get("port"), () => {
    console.log("Servidor en el puerto", app.get("port"));
})
