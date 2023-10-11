import { Model, Op } from 'sequelize';


export default function(sequelize, DataTypes) {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    Name: DataTypes.STRING,
    Rating: DataTypes.DECIMAL,
    Address: DataTypes.TEXT,
    Description: DataTypes.TEXT,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};