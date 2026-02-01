import exp from 'express'
import {ProductModel} from '../Models/prodModel.js'
export const productApp=exp.Router()

productApp.get('/products',async(req,res)=>{
    let productObj=await ProductModel.find()
    res.status(200).json({message:"products",payload:productObj})
})

productApp.get('/products/:id',async(req,res)=>{
    let objID=req.params.id;
    let prodObj=await(ProductModel.findById(objID))
    res.status(200).json({message:"product",payload:prodObj})
})

productApp.post('/products',async(req,res)=>{
        let newProduct=req.body;
        let newProductDoc=new ProductModel(newProduct)
        await newProductDoc.save()
        res.status(201).json({message:"Product Created"})
})

productApp.put('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let modifiedProd=req.body 
    let latestProd = await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProd}},{new:true,runValidators:true})
    res.status(200).json({message:"product modified",payload:latestProd})
})
productApp.delete('/products/:id',async(req,res)=>{
   let objId=req.params.id;
   let deleteProd=await ProductModel.findByIdAndDelete(objId)
   res.status(200).json({message:"Product deleted",payload:deleteProd})
})