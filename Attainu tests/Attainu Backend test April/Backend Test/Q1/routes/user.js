const express = require('express');
const { writeFile } = require('fs');
const router = express.Router();
const path = require('path');
const layout = path.join('layouts', 'index');
const fs = require('fs');

router.get('/userSignup', (req, res)=> {
    res.render('signup.hbs', {title:"Signup page", layout})
})

router.post('/userSignup', async (req, res)=>{
    try {
        if (req.body.name && req.body.password && req.body.email) {
            
            let data = JSON.stringify([req.body,],null,2);
                fs.appendFile('users.json', data, (err)=>{
                    if(err){
                        console.log(err)
                        throw err
                    }
                    console.log("User data saved succcessfully...")
                });

            // fs.readFile('users.json', function (err, data) {
            //     var json = JSON.parse(data);
            //     json.push(req.body);
            //     fs.writeFile("users.json", JSON.stringify(json), function (err) {
            //         if (err) throw err;
            //         console.log('User data Saved...');
            //     });
            // })

                res.render('signup', {title:"Saved ",layout, message:"User Registered!"})
        } else {
            console.log("All the inputs are not provided");
            res.render('signup', {title:"Incomplete details", layout, Error:"Please fill up all the fields"});
        }



    } catch (error) {
        console.log(error.message);
        res.render('signup', { title: "Saved ", layout, error: "Error while saving!" })
    }
})

module.exports = router;