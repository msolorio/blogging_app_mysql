module.exports = function(sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Post, {
      through: 'Tag_Post'
    });
  };

  return Tag;
};
