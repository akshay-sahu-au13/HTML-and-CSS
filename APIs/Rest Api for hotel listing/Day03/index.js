const express = require('express');
const app = express();
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const MongoUri = "mongodb://localhost:27017";
const MongoClient = mongodb.MongoClient;
let dbObj;
let col_name = "hotels";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

MongoClient.connect(MongoUri, (err, connection)=> {
    if (err) throw err;
    dbObj = connection.db('cv_raman');
    console.log("DB COnnected")
});

app.get('/allhotels', async(req, res)=> {
    let hotels = await dbObj.collection(col_name).find({}).toArray();
    let cnt = 0
    let names = hotels.map(item => {
        cnt++
        return {id: cnt , name: item.name, city: item.city_name};
    })
    console.log(names);
    res.json({
        msg:" Below is the list of all the hotels",
        Hotels: hotels,
        Name_and_city: names
    })
    // res.send(`You can find the listing of all the hotels below: <br> ${hotels} ${hotels.cityname}`);
})

app.get('/hotels/:id', async (req, res)=> {
    let hotel = await dbObj.collection(col_name).findOne({_id:req.params.id});
    console.log(hotel);
    res.send(hotel)
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
})