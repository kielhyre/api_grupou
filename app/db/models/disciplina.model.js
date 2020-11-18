const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Disciplina = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Disciplina.associate = (models)=>{
    Disciplina.belongsToMany(models.professor, {
        through: 'professor_disciplina',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'professor' 
     })

     Disciplina.hasMany(models.turma, {
        foreignKey:{
            name:'id_disciplina'
        },
        as:'turma'
    })

    Disciplina.belongsToMany(models.hardskill, {
        through: 'disciplina_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'hardskill' 
     })

}

module.exports = Disciplina;
