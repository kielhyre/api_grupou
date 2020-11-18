const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardskills = require('./aluno_hardskills.routes');
const professor = require('./professor.routes');
const professorTurma = require('./professor_turma.routes');
const professorDisciplina = require('./professor_disciplina.routes');

module.exports = app => {
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/aluno_hardskills', alunoHardskills);
    app.use('/api/professor', professor);
    app.use('/api/professor_disciplina', professorDisciplina);
}

