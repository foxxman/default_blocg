import { DataTypes } from 'sequelize';
import { Table, Column, Model, HasMany, BelongsToMany } from 'sequelize-typescript';
import Message from './message.model';
import User from './user.model';
import UserChat from './user-chat.model';

@Table({
  tableName: 'chats',
})
class Chat extends Model<Chat> {
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
  public name!: string;

  @HasMany(() => Message)
  public messages?: Message[];

  @BelongsToMany(() => User, () => UserChat)
  public participants?: User[];
}

export default Chat;