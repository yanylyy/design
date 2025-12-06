document.addEventListener('DOMContentLoaded', function() {
    const bookButton = document.getElementById('bookButton');
    const bookingModal = document.getElementById('bookingModal');
    const confirmBtn = document.getElementById('confirmBooking');
    const errorModal = document.getElementById('errorModal');
    const closeErrorBtn = document.getElementById('closeError');
    
    if (bookButton) {
        bookButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const service = document.querySelector('input[name="service"]:checked');
            const master = document.querySelector('input[name="master"]:checked');
            const date = document.querySelector('input[name="booking-date"]:checked');
            const time = document.querySelector('input[name="booking-time"]:checked');
            
            if (!service || !master || !date || !time) {
                errorModal.style.display = 'flex';
                return;
            }

            bookingModal.style.display = 'flex';
        });
    }
    
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }
    
    if (closeErrorBtn) {
        closeErrorBtn.addEventListener('click', function() {
            errorModal.style.display = 'none';
        });
    }
});