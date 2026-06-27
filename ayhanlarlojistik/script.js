const callBtn = document.getElementById('callBtn');
const callDropdown = document.getElementById('callDropdown');

callBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    callDropdown.classList.toggle('show');
});

window.addEventListener('click', function() {
    if (callDropdown.classList.contains('show')) {
        callDropdown.classList.remove('show');
    }
});