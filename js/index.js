// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const unitPrice = Number(price.innerHTML);
  const unitQuantity = Number(quantity.value);
  const subtotal = unitPrice * unitQuantity;
  const subtotalNum = product.querySelector(".subtotal span");
  subtotalNum.innerHTML = subtotal;
  return subtotal;

 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    updateSubtotal(product);
  });
  
  
  // ITERATION 3
  const calculateAllPrices = [...allProducts].reduce((acc, currentValue) => {
    return acc + updateSubtotal(currentValue);
  }, 0);

  const total = document.querySelector("#total-value span");
  total.innerHTML = calculateAllPrices;
  return calculateAllPrices;
}



// ITERATION 4

let removeButton = document.getElementsByClassName('btn-remove');
  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  } 

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentTarget = target.parentNode.parentNode;
  parentTarget.parentNode.removeChild(parentTarget);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here




}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});