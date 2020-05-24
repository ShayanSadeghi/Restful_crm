import mongoose from 'mongoose'

const Schema  = mongoose.Schema;

const ContactSchema = new Schema({
  firstName:{
    type:String,
    required:'Enter first name'
  },
  lastName:{
    type:String,
    required:'Enter last name'
  },
  email:{
    type:String,
    required:'Enter an email address'
  },
  phone:{
    // because it is possible to start with 0 or chars, we use string for it too
    type:String
  },
  company:{
    type:String
  },
  date:{
    // this fill by database
    type:Date,
    default: Date.now
  }
});

export default ContactSchema;
