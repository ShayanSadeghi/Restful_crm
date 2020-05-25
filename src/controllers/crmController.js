import mongoose from "mongoose";
import ContactSchema from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.json(contact);
  });
};

export const showAllContacts = (req, res) => {
  Contact.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) =>  res.status(400).send(err));
};

export const showContactById = (req, res) => {
  Contact.findById(req.params.contactId).then((contact)=>{
    if(!contact){
      return res.status(404).json({contact:"This contact id was not found!"})
    }
    res.json(contact);
  }).catch(err => res.status(400).send(err))
};

export const updateContactById = (req,res)=>{
  Contact.findByIdAndUpdate(req.params.contactId,req.body,{new:true})
  .then(contact=>{
    if(!contact){
      res.status(404).json({error:"user not found!"})
    }
    res.json(contact);
  })
  .catch(err => res.status(400).json(err) );
};

export const deleteContactById = (req,res)=>{
  // There is a problem: if user doesn't exist, it send succesfull response
  Contact.findOneAndRemove({_id:req.params.contactId},(err,contact)=>{
    if(err){
      return res.send(err);
    }
    res.json({message:"successfully deleted!"});

  })
}
