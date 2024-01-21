import { password } from './../../services/auth/schemeValidator';
import { DataTypes } from 'sequelize';
import { Table, Column, Model, BelongsToMany, HasMany, HasOne } from 'sequelize-typescript';
import Chat from './chat.model';
import Message from './message.model';
import Token from './token.model';
import UserChat from './user-chat.model';
import { UserDTO } from '../../../types/auth';

@Table({
  tableName: 'users',
})
class User extends Model<User> {
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
  public login!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  public email!: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  public password!: string;

  @BelongsToMany(() => Chat, () => UserChat)
  public chats?: Chat[];

  @HasMany(() => Message, {
    foreignKey: 'userId',
    as: 'messages',
  })
  public messages?: Message[];

  @HasOne(() => Token, {
    foreignKey: 'userId',
    as: 'token',
  })
  public token?: Token;

  toDTO(): UserDTO {
    const { id, login, email } = this;
    return { id, login, email };
  }
}

export default User;