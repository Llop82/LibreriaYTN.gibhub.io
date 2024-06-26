// Elaborado por Salvador Garcia Diaz //
let cart = [];

function addToCart(title, price) {
    const existingProduct = cart.find(item => item.title === title);
    
    if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.price += price;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
    Swal.fire({
        icon: 'success',
        html: '<p class = "Des" >El objeto ha sido añadido al carrito </p>'
    });
    saveCart();
    displayCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function displayCart() {
    loadCart();
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.title} - $${(item.price / item.quantity).toFixed(2)} \n (Cantidad: ${item.quantity}) \n  Total: $${item.price.toFixed(2)}`;
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => removeFromCart(item.title);
        itemElement.appendChild(deleteButton);
        
        // Botón para reducir la cantidad del artículo
        const reduceButton = document.createElement('button');
        reduceButton.textContent = 'Eliminar Cantidad';
        reduceButton.onclick = () => reduceQuantity(item.title);
        itemElement.appendChild(reduceButton);
        
        cartItems.appendChild(itemElement);
    });
    displayTotal();
}

function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    saveCart();
    displayCart();
}

function reduceQuantity(title) {
    const item = cart.find(item => item.title === title);
    if (item.quantity > 1) {
        item.quantity--;
        item.price -= (item.price / (item.quantity + 1));
    } else {
        removeFromCart(title);
    }
    saveCart();
    displayCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

function displayTotal() {
    const total = calculateTotal();
    const totalElement = document.getElementById('cartTotal');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function isCartEmpty() {
    loadCart();
    return cart.length === 0;
}

function checkout() {
    if (isCartEmpty()) {
        alert('El carrito está vacío. Añade productos antes de finalizar la compra.');
        return;
    }
    saveCart();
    window.location.href = 'Contacto.html';
}

window.onload = function() {
    loadCart();
    displayCart();
}


document.getElementById('paymentMethod').onchange = function() {
    const cardInfo = document.getElementById('cardInfo');
    const cashInfo = document.getElementById('cashInfo');
    const storeInfo = document.getElementById('storeInfo');
    
    cardInfo.style.display = 'none';
    cashInfo.style.display = 'none';
    storeInfo.style.display = 'none';

    if (this.value === 'card') {
        cardInfo.style.display = 'block';
        document.getElementById('cardNumber').required = true;
        document.getElementById('expiryDate').required = true;
        document.getElementById('cvv').required = true;
        document.getElementById('store').required = false;
    } else if (this.value === 'cash') {
        cashInfo.style.display = 'block';
        document.getElementById('cardNumber').required = false;
        document.getElementById('expiryDate').required = false;
        document.getElementById('cvv').required = false;
        document.getElementById('store').required = true;
    } else {
        document.getElementById('cardNumber').required = false;
        document.getElementById('expiryDate').required = false;
        document.getElementById('cvv').required = false;
        document.getElementById('store').required = false;
    }
};

function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateBarcodeUrl(code) {
    return `https://bwipjs-api.metafloor.com/?bcid=code128&text=${code}&includetext&scale=3`;
}

document.getElementById('store').onchange = function() {
    const store = this.value;
    const storeInfo = document.getElementById('storeInfo');
    const storeLogo = document.getElementById('storeLogo');
    const barcodeImage = document.getElementById('barcode');
    
    if (store) {
        let logoSrc = '';
        switch (store) {
            case 'oxxo':
                logoSrc = 'Imagenes/oxxo.jpg';
                break;
            case 'seven-eleven':
                logoSrc = 'Imagenes/seven-eleven.jpg';
                break;
            case 'k-mart':
                logoSrc = 'Imagenes/k-mart.jpg';
                break;
            case 'circle-k':
                logoSrc = 'Imagenes/dulfi.jpg';
                break;
            case 'farmacias-roma':
                logoSrc = 'Imagenes/farmacias-roma.jpg';
                break;
            default:
                logoSrc = '';
        }
        
        const barcode = generateRandomCode(12);
        storeLogo.src = logoSrc;
        barcodeImage.src = generateBarcodeUrl(barcode);
        storeInfo.style.display = 'block';
    } else {
        storeInfo.style.display = 'none';
    }
};

document.getElementById('shippingForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const postalCode = document.getElementById('postalCode').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!name || !dob || !postalCode || !address || !phone || !email || !paymentMethod) {
        errorMessage.textContent = 'Por favor introduce todos los datos';
        return;
    }

    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (!cardNumber || !expiryDate || !cvv) {
            errorMessage.textContent = 'Por favor introduce todos los datos de la tarjeta';
            return;
        }
    } else if (paymentMethod === 'cash') {
        const store = document.getElementById('store').value;

        if (!store) {
            errorMessage.textContent = 'Por favor selecciona una tienda';
            return;
        }
    }

    errorMessage.textContent = '';
    alert('Gracias por su compra. Sus productos serán enviados pronto.');
    localStorage.removeItem('cart');
    window.location.href = '0. Index.html';
};
