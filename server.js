const express=require('express');
const path=require('path');
const app=express();
const fs=require('fs');
const port=process.env.PORT||5000


const publicpath=path.join(__dirname, 'public');
console.log('path is:-' + publicpath);

app.use(express.static(publicpath));

const fileName ='./public/gamesData.txt';
app.get('/gameInfo',(req,res)=>{
    const d = new Date();
    console.log(`USER LOGGED IN TO GAMEINFO @ ${d.toTimeString()} ${d.toDateString()} `)
    fs.readFile(fileName,(err,res1)=>{
        if (err) return console.log(`${fileName} is NOT READABLE`);
        const data=JSON.parse(res1);
        res.write(JSON.stringify(data,undefined,4));
        res.end();
    })
})



app.listen(port, () => {
    console.log(`Server started on ${port}`);
});