// First Class Plus Button Event Handler
document.getElementById('first-plus-btn').addEventListener('click', function () {
    quantityUpdate('first-quantity', 'increase')
})

// First Class Minus Button Event Handler
document.getElementById('first-minus-btn').addEventListener('click', function () {
    quantityUpdate('first-quantity', 'decrease')
})

// Economy Plus Button Event Handler
document.getElementById('economy-plus-btn').addEventListener('click', function () {
    quantityUpdate('economy-quantity', 'increase')
})

// Economy Minus Button Event Handler
document.getElementById('economy-minus-btn').addEventListener('click', function () {
    quantityUpdate('economy-quantity', 'decrease')
})

// Quantity Update Function
function quantityUpdate(quantityId, isIncrease) {
    let Quantity = getInputQuantity(quantityId)
    let newQuantity = 0;
    if (isIncrease == 'increase') {
        newQuantity = Quantity + 1;
    }
    else if (isIncrease == 'decrease' && Quantity > 0) {
        newQuantity = Quantity - 1;
    }
    document.getElementById(quantityId).value = newQuantity;
    if (quantityId == 'first-quantity') {
        document.getElementById('popup-first-quantity').innerText = newQuantity;
    }
    else if (quantityId == 'economy-quantity') {
        document.getElementById('popup-economy-quantity').innerText = newQuantity;
    }
    calculateTotal()
}

// Calculate Total Price Function
function calculateTotal() {
    const firstQuantity = getInputQuantity('first-quantity')
    const economyQuantity = getInputQuantity('economy-quantity')

    const subtotal = (firstQuantity * 150) + (economyQuantity * 100);
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('popup-subtotal').innerText = subtotal;

    const tax = (subtotal * 0.1);
    document.getElementById('tax').innerText = tax;
    document.getElementById('popup-vat').innerText = tax;

    const total = subtotal + tax;
    document.getElementById('total').innerText = total;
    document.getElementById('popup-total').innerText = total;
}

// Get Input Quantity Function
function getInputQuantity(quantityId) {
    const inputQuantity = parseInt(document.getElementById(quantityId).value);
    return inputQuantity;
}

// Popup Message Event Handler
document.getElementById('book-btn').addEventListener('click', function () {
    document.getElementById('popup-message').style.display = 'block';
})

// OK Button Event Handler
document.getElementById('ok-btn').addEventListener('click', function () {
    document.getElementById('popup-message').style.display = 'none';
})