const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Curso = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Curso.associate = (models)=>{
    
    Curso.belongsToMany(models.turma, {
        through: 'curso_turma',
        timestamps:false,
        foreignKey:{
            name:'id_curso'
        },
        as:'turma' 
     })

     Curso.hasMany(models.aluno, {
        foreignKey:{
            name:'id_curso'
        },
        as:'aluno'
    })

    
    
}

module.exports = Curso;
