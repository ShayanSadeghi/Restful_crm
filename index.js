import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

app.get('/',(req,res)=>{
  res.send(`App running on port ${PORT}`);
})

app.listen(PORT,()=>{
  console.log(`App listen to port ${PORT}`);
})
