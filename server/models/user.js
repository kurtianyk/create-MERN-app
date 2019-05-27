import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserModelName = 'User';

const UserSchema = new Schema({
  id: { type: Number, required: true },
  userName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model(UserModelName, UserSchema);

export default User;
