import express from "express"
import 'dotenv/config'
const app = express()


const port = 3000


app.get('/',(req,res)=>{
    res.send('<h1>lol</h1>')
    
})


app.get('/about',(req,res)=>{
    res.send('this is me deepak bharti me how are you')
})


app.listen(process.env.PORT,()=>{
    console.log(`app listening on part ${process.env.PORT} `)
})

