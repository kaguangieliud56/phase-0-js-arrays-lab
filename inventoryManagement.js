
let products = ["Laptop","Phone","Headphones","Monitor"]

function logFirstProduct(){
  console.log(products[0]);
}
 function addProduct(Tablet){
   products.push(Tablet);
 }

function updateProductName(position, newName)
{
  products[position] = newName;
}
updateProductName(1,"Smartphone");

function removeLastProduct(){
  products.pop();
}

module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
};

