const express = require('express');
const app = express();
const PORT = 4200;
const jsondata = [
    { id:"1",  description: "this is two desc",   name: "Iron man" ,        active: 1},
    { id:"2",  description: "this is three desc", name: "Batman" ,          active: 0},
    { id:"3",  description: "this is four desc",  name: "spiderman" ,       active: 1},
    { id:"4",  description: "this is five desc",  name: "Caption America" , active: 1},
    { id:"5",  description: "this is six desc",   name: "Superman" ,        active: 0},
];

app.get('/allproject', (req,res) => {
    res.send(jsondata);
})

app.get('/fetchbyid/:id', (req,res) => {
    var particularval = 'Id is not valid';
       jsondata.forEach(parsedval => {
          if(parsedval.id === req.params.id ){
             particularval = parsedval;
          }
      })
    res.send(particularval);
})

app.get('/activesort', (req,res) => {
    var activvalues = [];
    jsondata.forEach(parsedval => {
        if(parsedval.active){
            activvalues.push(parsedval);
        }
    });
    res.send(activvalues);
})

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
