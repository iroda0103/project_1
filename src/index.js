const express=require('express')
const config=require('./shared/config')
const router=require('./routes')

const app=express()

app.use(express.json())
app.use(router.stuffRouter)
app.use(router.studentRouter)

app.listen(config.port,()=>{
    console.log(`Server ${config.port}-portda ishlayapti`)
})