module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.Author, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    Post.belongsTo(models.Category, {
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

    Post.belongsToMany(models.Tag, {
      through: 'Tag_Post',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Post;
};
