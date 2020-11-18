const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Turma = sequelize.define(name,{
    numero:{
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Turma.associate = (models)=>{
    Turma.belongsTo(models.disciplina, {
        foreignKey:{
            name:'id_disciplina'
        },
        as:'disciplina'
    })

    Turma.belongsToMany(models.professor, {
        through: 'professor_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'professor' 
     })
     Turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'hardskill' 
     })

     Turma.belongsToMany(models.curso, {
        through: 'curso_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'curso' 
     })

     Turma.belongsToMany(models.aluno, {
        through: 'aluno_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'aluno' 
     })

     Turma.hasMany(models.grupo, {
        foreignKey:{
            name:'id_turma'
        },
        as:'grupo'
    })

    Turma.hasMany(models.atividadeav, {
        foreignKey:{
            name:'id_turma'
        },
        as:'atividadeav'
    })
    
}

module.exports = Turma;
