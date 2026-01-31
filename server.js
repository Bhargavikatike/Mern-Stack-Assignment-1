import exp from 'express';
import {userApp} from './apis/userapi.js'
import {productApp} from './apis/productapi.js'
   const app=exp()
   app.listen(3000,()=>console.log('HTTP server listening oin port 3000...'))
   app.use(exp.json())
   app.use('/user-api',userApp)
   app.use('/product-api',productApp)