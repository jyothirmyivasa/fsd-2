const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
	res.send('<h2>welcome to express routing example</h2>');
});

app.get('/user/:id',(req,res)=>{
	const userId=req.params.id;
	res.send(`USERID from route parameter: ${userId}`);
});
app.get('/search',(req,res)=>{
	const{term,category}=req.query;
	res.send(`You searched for term=${term},category=${category}`);
});

app.get('/build-url',(req,res)=>{
	const userId=101;
	const url=`/profile/${userId}?show=summary`;
	res.send(`<a href="${url}">Go to profile</a>`); 
});
app.get('/profile/:id',(req,res)=>{
	const id=req.params.id;
	const show=req.query.show;
	res.send(`Profile page of user ${id}.show:${show}`);
});
const PORT=3000;
app.listen(PORT,()=>{
	console.log(`Server running at http://localhost:${PORT}`);
});

