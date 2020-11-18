module.exports = (()=>{

    const professorDisciplinaController = require('../controllers/professor_disciplina.controller');

    var router = require('express').Router();

    router.post("/:id", async (req,res)=>{
        const disciplina = await professorDisciplinaController.store(req.body, req.params.id);
        res.json(disciplina);
    })

    router.delete("/:id", async(req,res)=>{
        const disciplina = await professorDisciplinaController.destroy(req.body, req.params.id);
        res.json(disciplina); 
    })

    return router
})()