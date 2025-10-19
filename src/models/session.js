import { Schema } from 'mongoose';
import { model } from 'mongoose';

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      trim: true
    },
    accessToken: {
      type: String,
      unique: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: {
      type: Date,
      required: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Session = model('Session', sessionSchema);
