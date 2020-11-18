const models = require('../db/models');

// {
//  "turma": [

//   { "numero": "841"},
//   { "numero": "842"} 
//  ]
// }
let new_professor_turma = [];
exports.store = async (obj, id_professor)=>{
    const professor = await models.professor.findOne({
        where: {id : id_professor}
    })
    
    for (let h in obj.turma){
        let turma = obj.turma[h];
        console.log(turma);

        const [resultado] = await models.turma.findOrCreate({
            where: turma
        })

        new_professor_turma.push(resultado.id)
   
   
    }

    professor.addTurma(new_professor_turma)
    new_professor_turma = [];

    return true
}

exports.destroy = async (obj, id_professor)=>{
    const professor = await models.professor.findOne({
            where: {id : id_professor}
        })
        
        for (let h in obj.turma){
            let turma = obj.turma[h];
            console.log(turma);

            const [resultado] = await models.turma.findOrCreate({
                where: turma
            })

            new_professor_turma.push(resultado.id)
    
    
        }

        professor.removeTurma(new_professor_turma)
        new_professor_turma = [];
        
        return true
}