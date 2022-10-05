require("dotenv").config();
const express=require("express");
const cors=require("cors");
const morgan = require("morgan");
const app=express();
const port = process.env.PORT || 8000;
const db = require('./db')

app.use(cors());
//express middleware
app.use(express.json());

//third-party middleware
app.use(morgan("dev")); 

//custom middleware
app.use((req,res,next)=>{
    console.log("middleware");
    next();
})

// get all the restaurants
app.get("/api/v1/restaurants",async(req,res)=>{ 
    try{
        const allRestauarants  = await db.query("SELECT * FROM restaurants");  
        console.log("get all restaurants",allRestauarants);
        res.status(200).json({
            status:"fetched restaurants successfully", 
            results:allRestauarants && allRestauarants.rows && allRestauarants.rows.length,
            data:{
                restaurants:allRestauarants && allRestauarants.rows
            }
        });
    }catch(err){
        console.log(err)
    }
});

// get restaurant detail
app.get("/api/v1/restaurants/:id",async(req,res)=>{
    try{
        const restauarantDetail  = await db.query(`SELECT * FROM restaurants WHERE id=${req.params.id}`);  
        res.status(200).json({
            status:"success ", 
            data:{
                restaurant:restauarantDetail && restauarantDetail.rows[0]
            }
        });
    }catch(err){
        console.log(err)
    }
});

// create new restaurant
app.post("/api/v1/restaurants",async(req,res)=>{
    console.log("create new restaurant",req.body);
    try{
        const newResto  = await db.query(`INSERT INTO restaurants(name,location,price_range) VALUES($1,$2,$3) returning *`,[req.body.name,req.body.location,req.body.price_range]);  
        res.status(201).json({
            status:"success ", 
            data:{
                restaurant:newResto && newResto.rows
            }
        });
    }catch(err){
        console.log(err)
    }
});

// update restaurant
app.put("/api/v1/restaurants/:id",async(req,res)=>{
    try{
        const updatedResto  = await db.query(`UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id=$4 returning *`,[req.body.name,req.body.location,req.body.price_range,req.params.id]);  
        console.log(" updated Resto",updatedResto);
        res.status(200).json({
            status:"success ", 
            data:{
                restaurant:updatedResto && updatedResto.rows
            }
        });
    }catch(err){
        console.log(err)
    }
});

// delete restaurant
app.delete("/api/v1/restaurants/:id",async(req,res)=>{
    try{
        const deletedResponse = await db.query(`DELETE FROM restaurants WHERE id=$1`,[req.params.id]);  
        console.log("deletedResponse",deletedResponse);
        res.status(204).json({
            status:"successfully deleted"
        });
    }catch(err){
        console.log(err)
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));