import mongoose from 'mongoose';
import ContactSchema from '../models/crmModel';

const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = (req, res) => {

  const newContact = new Contact(req.body);

  newContact.save((err,contact)=>{
    if (err){
      return res.status(400).send(err);
    }
    res.json(contact);
  });
};

export const showAllContacts = (req,res)=>{
  Contact.find()
  .then(result=>{
    res.json(result);
  })
  .catch(err => console.log(err))
}
