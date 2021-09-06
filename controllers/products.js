
let products =
[
    { product_name: "Мышка", price: 100, id_product: 456 },
    { product_name: "Клавиатура", price: 200, id_product: 455 },
    { product_name: "Колонки", price: 130, id_product: 454 },
    { product_name: "Наушники", price: 150, id_product: 453 },
    { product_name: "Ноутбук", price: 400, id_product: 452 },
    { product_name: "Коврик", price: 150, id_product: 451 },
    { product_name: "Кресло", price: 160, id_product: 450 }
  ]

  export const getAll = (req, res) =>{
      res.status(200).json(products)
  }
  