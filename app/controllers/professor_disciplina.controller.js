const models = require('../db/models');

// {
//  "disciplina": [

//   { "nome": "Mobile"},
//   { "nome": "Distribuidas"} 
//  ]
// }
let new_professor_disciplina = [];
exports.store = async (obj, id_professor)=>{
    const professor = await models.professor.findOne({
        where: {id : id_professor}
    })
    
    for (let h in obj.disciplina){
        let disciplina = obj.disciplina[h];
        console.log(disciplina);

        const [resultado] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        new_professor_disciplina.push(resultado.id)
   
   
    }

    professor.addDisciplina(new_professor_disciplina)
    new_professor_disciplina = [];

    return true
}

exports.destroy = async (obj, id_professor)=>{
    const professor = await models.professor.findOne({
        where: {id : id_professor}
    })
    
    for (let h in obj.disciplina){
        let disciplina = obj.disciplina[h];
        console.log(disciplina);

        const [resultado] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        new_professor_disciplina.push(resultado.id)
   
   
    }


        professor.removeDisciplina(new_professor_disciplina)
        new_professor_disciplina = [];
        
        return true
}