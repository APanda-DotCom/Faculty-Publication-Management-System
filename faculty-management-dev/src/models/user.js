import constant from "../constant";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
    },
    collegeName: {
      type: DataTypes.STRING,
    },
    facultyName: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isNumeric: true,
      },
    },
    designation: {
      type: DataTypes.STRING,
    },
    jobNature: {
      type: DataTypes.STRING,
    },
    dateOfJoining: {
      type: DataTypes.DATE,
    },
    academicQualification: {
      type: DataTypes.STRING,
    },
    publicationHistory: {
      type: DataTypes.STRING,
    },

    department: {
      type: DataTypes.STRING,
    },
    experience:{
      type: DataTypes.INTEGER
    },
    bio: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },

    profileImageURL: {
      type: DataTypes.STRING,
    },

    passwordResetToken: {
      type: DataTypes.STRING,
    },

    token: {
      type: DataTypes.TEXT,
    },
  });

  User.addScope("user", () => ({
    where: { role: constant.commonConstant.ROLE.USER },
  }));

  User.addScope("admin", () => ({
    where: { role: constant.commonConstant.ROLE.ADMIN },
  }));

  User.associate = (models) => {
    User.hasMany(
      models.publication,
      {
        foreignKey: 'userId',
      },
    );
  };
  return User;
};
