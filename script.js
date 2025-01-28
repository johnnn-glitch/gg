// Menambahkan event listener ke tombol untuk mengubah warna latar belakang
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
