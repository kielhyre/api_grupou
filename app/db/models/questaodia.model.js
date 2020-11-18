const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Questaodia = sequelize.define(name,{
    descricao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        field:'criado_em'
    }, 
    updatedAt: {
        type: DataTypes.DATE,
        field:'atualizado_em'
    }
},{
    sequelize,
    tableName: name
});

Questaodia.associate = (models) =>{
    Questaodia.belongsTo(models.questao, {
        foreignKey:{
            name:'id_questao'
        },
        as:'questao'
    })
    Questaodia.belongsTo(models.aluno, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })
}

module.exports = Questaodia;
