const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Hardskill = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    },
    createdAt: {
        type:DataTypes.DATE,
        field:'criado_em'
    }, 
    updatedAt: {
        type:DataTypes.DATE,
        field:'atualizado_em'
    }
},{
    sequelize,
    tableName: name
});

Hardskill.associate = (models) =>{
    Hardskill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'alunos' 
     })
     Hardskill.hasMany(models.questao, {
        foreignKey:{
            name:'id_hardskill'
        },
        as:'questoes'
    })
    Hardskill.belongsToMany(models.turma, {
        through: 'turma_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'turma' 
     })

     Hardskill.belongsToMany(models.disciplina, {
        through: 'disciplina_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'disciplina' 
     })

     Hardskill.belongsToMany(models.atividadeav, {
        through: 'atividadeav_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'atividadeav' 
     })
}

module.exports = Hardskill;
