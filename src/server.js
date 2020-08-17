const express = require('express')
const dataStorage = require('./dataStorage')
const bodyParser = require('body-parser')

const app = express()
const port = 4005

app.use(bodyParser.urlencoded({extended: true}))

app.get('/alunos', (req, res) => {
    res.send(dataStorage.getAlunosTotal())
})

app.get('/alunos/:id', (req, res) => {
    res.send(dataStorage.getAluno(req.params.id))
})

app.post('/alunos', (req, res) => {
    const aluno = dataStorage.saveAluno({
        nome: req.body.nome,
        idade: req.body.idade,
        turma: req.body.turma
    })
    res.send(aluno)
})

app.put('/alunos/:id', (req, res) => {
    const aluno = dataStorage.saveAluno({
        nome: req.body.nome,
        idade: req.body.idade,
        turma: req.body.turma,
        id: req.params.id
    })
    res.send(aluno)
})

app.delete('/alunos/:id', (req, res) => {
    const aluno = dataStorage.deleteAluno(req.params.id)
    res.send(aluno)
})

app.listen(port, () => console.log(`Executando na porta ${port}`))