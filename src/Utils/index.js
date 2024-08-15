/**
 * This function calculates total prices of a new order
 * @param {Array} products cardProduct: Array of object
 * @returns {number} total Price
 */

export const totalPrice= (products)=>{
    let sum = 0
    products.forEach(product => sum += product.price );
    return sum
}