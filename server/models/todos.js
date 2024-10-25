import mongoose from 'mongoose';

// Create the Todo schema
const todoSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: 'User',  // Name of the model being referenced
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    default: ""  // Optional field, so default to an empty string
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

// Export the model
export default Todo;
