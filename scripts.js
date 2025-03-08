// Ödeme formunu göster
function showPaymentForm() {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.style.display = 'block';
    window.scrollTo({ top: paymentForm.offsetTop, behavior: 'smooth' });
}

// Ödemeyi işle
function processPayment(event) {
    event.preventDefault();
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Ödemeniz başarıyla tamamlandı. Teşekkür ederiz!';
    successMessage.style.display = 'block';

    // Formu sıfırla
    setTimeout(() => {
        successMessage.textContent = '';
        document.getElementById('paymentForm').style.display = 'none';
    }, 3000);
}
