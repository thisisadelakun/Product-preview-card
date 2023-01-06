const hasClass = document.getElementById('btnspan')
let btn = document.querySelector('.btn-btns')
let cart = document.getElementById('btnspan')

function changeCart() {
    let hasClass = cart.classList.contains(cart.innerText = 'Add to Cart')
    
    if (hasClass) {
        cart.classList.remove(cart.innerText = 'Added to Cart ✔')
        
    } else {
        cart.classList.add(cart.innerText = 'Added to Cart ✔')
    }
}
btn.addEventListener('click', changeCart)