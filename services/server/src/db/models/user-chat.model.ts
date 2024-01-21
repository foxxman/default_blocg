import { DataTypes } from 'sequelize';
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Chat from './chat.model';
import User from './user.model';

@Table({
  tableName: 'users_chats',
})
class UserChat extends Model<UserChat> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  public userId!: number;

  @ForeignKey(() => Chat)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  public chatId!: number;
}

export default UserChat;