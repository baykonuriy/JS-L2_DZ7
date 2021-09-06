let userProducts = []

export const addProduct = (req, res) =>{
    const productInBascet = {
        ...req.body
    }
    userProducts.push(productInBascet)
    res.status(201).json(productInBascet)
    console.log('serve-add',userProducts)
}

export const remove = (req, res) =>{
    userProducts = userProducts.filter(c => c.id_product != req.params.id_product)
    res.json({message: 'item in userProducts has been removed!'})
    console.log('serve-remove', userProducts)
}