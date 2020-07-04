module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Author;
}