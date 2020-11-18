const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Grupo = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Grupo.associate = (models)=>{
    
    Grupo.hasMany(models.tarefa, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'tarefa'
    })
    Grupo.belongsTo(models.turma, {
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    Grupo.belongsToMany(models.aluno, {
        through: 'aluno_grupo',
        timestamps:false,
        foreignKey:{
            name:'id_grupo'
        },
        as:'aluno' 
     })

     Grupo.belongsTo(models.atividadeav, {
        foreignKey:{
            name:'id_atividade_av'
        },
        as:'atividadeav'
    })

    Grupo.hasMany(models.avaliacao360, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'avaliacao360'
    })
    
}

module.exports = Grupo;
