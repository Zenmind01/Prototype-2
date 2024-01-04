const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;

const replySchema = new Schema({
    user: {type:Schema.Types.ObjectId,refPath:"model"},
    model: {
        type: String,
        enum: ['users', 'doc'], // Specify the possible values for the 'model' field
      }, // You might want to store user IDs and reference a User model
    replyText: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true });

const PostSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"model"
    },
    model: {
        type: String,
        enum: ['users', 'doc'], // Specify the possible values for the 'model' field
      },
    title:{
        type:String,
        default:""
    },
    desc:{
        type:String,
        require:true,
    
    },
    likes:{
        type: [Schema.Types.ObjectId],
        ref: "users",
        default:[]
    },
    replies:{
        type: [replySchema],
        default:[]
    },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

PostSchema.pre('save', async function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

PostSchema.pre('findOneAndUpdate', function(next) {

    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
    // Hash the password
    
});


const postModel = db.model('posts',PostSchema);

module.exports = postModel;