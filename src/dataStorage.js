const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const alunos = {}

const saveAluno = (aluno) => {
    if (!aluno.id) aluno.id = sequence.id
    alunos[aluno.id] = aluno
    return aluno
}

const getAluno = (id) => alunos[id] || {}

const getAlunosTotal = () => Object.values(alunos)

const deleteAluno = (id) => {
    const aluno = alunos[id]
    delete alunos[id]
    return aluno
}

module.exports = {saveAluno, getAluno, getAlunosTotal, deleteAluno}