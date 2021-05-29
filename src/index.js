const express = require('express')
const app = express()
app.use(express.json())

const Names = ["Fulano", "Joao", "Lucio"]
//Protocolos HTTP
//GET Lista
app.get("/names", (req, res) => {
  const MapNames = Names.map(names => names)
  res.json(MapNames)
})

//POST criar
app.post("/name", (request, res) =>{
  const { name } = request.body
  Names.push(name)
  res.json({ messege: "Confirm!" })
})

//PUT "editar"
app.put("/name/:id", (req, res) => {
  const { id } = req.params
  const { name } = req.body

  Names[id] = name
  res.json({m: "atualizado"})
})

app.listen(3333, () =>{console.log("Started")})
