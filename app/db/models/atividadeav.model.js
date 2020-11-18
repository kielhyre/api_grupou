const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Atividadeav = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Atividadeav.associate = (models)=>{
    Atividadeav.belongsTo(models.turma, {
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    Atividadeav.hasMany(models.grupo, {
        foreignKey:{
            name:'id_atividade_av'
        },
        as:'grupo'
    })

    Atividadeav.hasMany(models.avaliacao360, {
        foreignKey:{
            name:'id_atividade_av'
        },
        as:'avaliacao360'
    })

    Atividadeav.belongsToMany(models.hardskill, {
        through: 'atividadeav_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_atividade_av'
        },
        as:'hardskill' 
     })
    
    
}

module.exports = Atividadeav;
