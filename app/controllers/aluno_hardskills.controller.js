const models = require('../db/models');

// {
//  "hardskills": [

//   { "descricao": "Ruby"},
//   {"descricao": "Python"},  
//   {"descricao": "Python 3"}   
//  ]
// }
let new_aluno_hardskill = [];
exports.store = async (obj, id_aluno)=>{
    const aluno = await models.aluno.findOne({
        where: {id : id_aluno}
    })
    
    for (let h in obj.hardskills){
        let hardskill = obj.hardskills[h];
        console.log(hardskill);

        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_aluno_hardskill.push(resultado.id)
   
   
    }

    aluno.addHardskill(new_aluno_hardskill)
    new_aluno_hardskill = [];

    return true
}

exports.destroy = async (obj, id_aluno)=>{
    const aluno = await models.aluno.findOne({
            where: {id : id_aluno}
        })
        
        for (let h in obj.hardskills){
            let hardskill = obj.hardskills[h];
            console.log(hardskill);

            const [resultado] = await models.hardskill.findOrCreate({
                where: hardskill
            })

            new_aluno_hardskill.push(resultado.id)
    
    
        }

        aluno.removeHardskill(new_aluno_hardskill)
        new_aluno_hardskill = [];
        
        return true
}