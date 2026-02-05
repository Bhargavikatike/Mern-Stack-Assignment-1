import exp from 'express'
export const productApp=exp.Router()

let products=[];

productApp.get('/products',(req,res)=>{
res.status(200).json({message:"all products",payload:products})
})

productApp.post('/products',(req,res)=>{
   let newProduct=req.body;
    products.push(newProduct);
    res.status(201).json({message:"Product created"})
})

productApp.put('/products',(req,res)=>{
    let modifiedProd=req.body;
    let prodIndex=products.findIndex(prodObj=>prodObj.prodId===modifiedProd.prodId)
    if(prodIndex===-1)
    {
        return res.status(404).json({message:"product not found"})
    }
    products.splice(prodIndex,1,modifiedProd)
    res.status(200).json({message:"product modified"})
    })

productApp.get('/products-id/:id',(req,res)=> {
        //console.log(req.params)
        
       let productid= Number(req.params.id )

let product=products.find(prodObj=>prodObj.prodId===productid)
if(!product) {
    return res.status(404).json({message:"product not found"})
}
res.status(200).json({message:"product",payload:product})

    })

productApp.get('/products-brand/:brand',(req,res)=> {
        //console.log(req.params)
        
       let productbrand= req.params.brand 
let product=products.filter(prodObj=>prodObj.brand===productbrand)
if(product.length===0) {
    return res.status(404).json({message:"product not found"})
}
res.status(200).json({message:"products",payload:product})
    })

productApp.delete('/products/:id',(req,res)=>{
    let productid=Number(req.params.id)
    let prodIndex=products.findIndex((prodObj)=>prodObj.prodId===productid)
    if(prodIndex===-1){
       return  res.status(404).json({message:"product not found"})
    }
     products.splice(prodIndex,1);
     res.status(200).json({message:"product deleted"})
})