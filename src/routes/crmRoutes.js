const routes = (app) =>{
  app.route('/contact')
  .get((req,res,next)=>{
    //middleware
    console.log(`request from: ${req.originalUrl}`);
    console.log(`request type: ${req.method}`);
    next();
  },(req,res)=>{
    res.send('GET works well!');
  })

  .post((req,res)=>{
    res.send("POST works well!");
  })


  app.route('/contact/:contactId')
  .put((req,res)=>{
    res.send("PUT works well!");
  })

  .delete((req,res)=>{
    res.send("DELETE works well!");
  })

};

export default routes;
