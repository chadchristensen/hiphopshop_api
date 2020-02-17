module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'Please provide a value for "categoryName"',
          },
          notEmpty: {
            msg: 'Please provide a value for "categoryName"',
          },
          isAlpha: {
            msg: 'Please provide only letters for "categoryName"',
          },
          len: [3, 20],
        },
      },
    },
    {}
  );
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
