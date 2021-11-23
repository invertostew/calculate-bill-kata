function calculateBill(price, vat, tip) {
    if (typeof price !== 'number' || typeof vat !== 'number' || typeof tip !== 'number') {
        return 'error';
    }
    const total = price + (price * (vat / 100)) + tip;
    return '£' + total;
}

module.exports = calculateBill;
