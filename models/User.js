import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  gold: {
    type: Number,
    default: 1000,  // Starting gold for a player
  },
  mana: {
    type: Number,
    default: 500,   // Starting mana for spells
  },
  base: {
    buildings: [{ type: String }],
    defenses: [{ type: String }],
  },
  army: {
    wizards: {
      type: Number,
      default: 0,
    },
    golems: {
      type: Number,
      default: 0,
    },
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
