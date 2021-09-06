import express from 'express'
import path from 'path'
import productRoutes from './routes/products.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(productRoutes)



app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`)
})