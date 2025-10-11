import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      trim: true,
      default:""
    },
    tag: {
      type: String,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: "Todo"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

noteSchema.index({ title: "text", content: "text" });

export const Note = model('Note', noteSchema);
