module.exports = (()=>{

    const professorController = require('../controllers/professor.controller');

    var router = require('express').Router();

    router.post("/", async (req,res)=>{
        const professor = await professorController.store(req.body);
        res.json(professor);
    })

    router.get("/", async (req,res)=>{
        const professor = await professorController.index();
        res.json(professor);
    })

    router.get("/:id", async (req,res)=>{
        const professor = await professorController.show(req.params.id);
        res.json(professor);
    })

    router.put("/:id", async (req,res)=>{
        const professor = await professorController.update(req.body, req.params.id);
        res.json(professor);
    })

    router.delete("/:id", async(req,res)=>{
        const professor = await professorController.destroy(req.params.id);
        res.json(professor); 
    })

    return router
})()