import { DataTypes } from 'sequelize';
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';

@Table({
  tableName: 'tokens',
})
class Token extends Model<Token> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  public refreshToken!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  public accessToken!: string;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
  })
  public expiresIn!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  public userId!: number;

  @BelongsTo(() => User, {
    foreignKey: 'userId',
    as: 'user',
  })
  public user?: User;
}

export default Token;