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
  };

  return Post;
};
