module.exports = (()=>{

    const professorTurmaController = require('../controllers/professor_turma.controller');

    var router = require('express').Router();

    router.post("/:id", async (req,res)=>{
        const turma = await professorTurmaController.store(req.body, req.params.id);
        res.json(turma);
    })

    router.delete("/:id", async(req,res)=>{
        const turma = await professorTurmaController.destroy(req.body, req.params.id);
        res.json(turma); 
    })

    return router
})()