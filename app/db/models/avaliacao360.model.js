const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Avaliacao360 = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

Avaliacao360.associate = (models)=>{
    Avaliacao360.belongsTo(models.grupo, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupo'
    })

    Avaliacao360.belongsTo(models.aluno, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })

    Avaliacao360.belongsTo(models.atividadeav, {
        foreignKey:{
            name:'id_atividade_av'
        },
        as:'atividadeav'
    })

    Avaliacao360.belongsToMany(models.softskill, {
        through: 'avaliacao360_softskill',
        timestamps:false,
        foreignKey:{
            name:'id_avaliacao360'
        },
        as:'softskill' 
     })
    
    
}

module.exports = Avaliacao360;
