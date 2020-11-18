const models = require('../db/models');

//GET, POST, PUT, DELETE 
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST professor
//update PUT professor,ID
//destroy DELETE ID

exports.index = async ()=>{
    const resultado = await models.professor.findAll({
        include:{all: true}
    });
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.professor.findByPk(id, {
        include:{all: true}
    });
    return resultado
}

exports.store = async (professor)=>{
    const resultado = await models.professor.create(professor, {
        include:{all: true}
    });
    return resultado
}

exports.update = async (professor, id)=>{
    const resultado = await models.professor.update(professor, {
        where: {id:id}
    });
    return resultado
}

exports.destroy = async (id)=>{
    const resultado = await models.professor.destroy({
        where: {id:id}
    });
    return resultado
}