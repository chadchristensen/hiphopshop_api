module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            msg: 'Please provide a value for "title"',
          },
        },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please provide a value for "body"',
          },
          notNull: {
            msg: 'Please provide a value for "body"',
          },
        },
      },
      productUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please provide a value for "productURL"',
          },
          notNull: {
            msg: 'Please provide a value for "productURL"',
          },
          isUrl: {
            msg:
              'productURL must be in the format of a URL e.g. www.placecage.com',
          },
        },
      },
      publishDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isAfter: '2020-01-01',
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please provide a value for "photoURL"',
          },
          notNull: {
            msg: 'Please provide a value for "photoURL"',
          },
          isUrl: {
            msg:
              'photoURL must be in the format of a URL e.g. www.placecage.com',
          },
        },
      },
    },
    {}
  );
  BlogPost.associate = function(models) {
    // associations can be defined here
  };
  return BlogPost;
};
