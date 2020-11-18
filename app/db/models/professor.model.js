const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Professor = sequelize.define(name,{
    matricula:{
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Professor.associate = (models)=>{
    Professor.belongsTo(models.usuario, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    Professor.belongsToMany(models.disciplina, {
        through: 'professor_disciplina',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'disciplina' 
     })

     Professor.belongsToMany(models.turma, {
        through: 'professor_turma',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'turma' 
     })

}

module.exports = Professor;
