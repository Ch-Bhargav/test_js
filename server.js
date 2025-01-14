 const courses = [
 	{id:1,name:'HelloWorld!'},
 	{id:2,name:'HelloWorld!!'},
 	{id:3,name:'HelloWorld!!!'},

 ];

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
	res.send("HellWorld!");
});

app.get('/api/courses',(req,res)=>{
	res.send(courses);
});

app.post('/api/courses', (req,res)=>{
	let course={
		id: courses.length + 1,
		name: req.body.name,
	};
	courses.push(course);
	res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) res.status(404).send("The course with the given id was not present");
	else res.send(course); 

});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));