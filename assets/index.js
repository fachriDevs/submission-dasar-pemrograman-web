const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua kolom.');
    } else { 
        alert('Formulir telah dikirim.');
        form.reset();
    }
});

// Dapatkan elemen tombol hamburger dan menu navigasi
const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

// Tambahkan event listener untuk menampilkan/sembunyikan menu saat tombol hamburger diklik
hamburgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
