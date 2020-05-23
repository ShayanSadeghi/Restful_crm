import express from 'express';

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
  res.send(`App running on port ${PORT}`);
})

app.listen(PORT,()=>{
  console.log(`App listen to port ${PORT}`);
})
