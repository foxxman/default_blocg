import { DataTypes } from 'sequelize';
import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Chat from './chat.model';
import User from './user.model';

@Table({
  tableName: 'messages',
})
class Message extends Model<Message> {
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
  public text!: string;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
  })
  public date!: Date;

  @ForeignKey(() => Chat)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  public chatId!: number;

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
  
  @BelongsTo(() => Chat, {
    foreignKey: 'chatId',
    as: 'chat',
  })
  public chat?: Chat;

  
}

export default Message;