// Fungsi untuk menangani klik pada tab
function handleTabClick(event) {
    event.preventDefault();
    const targetTab = event.target.getAttribute('data-tab');
    showTab(targetTab);
    
    // Simpan tab yang aktif ke localStorage
    localStorage.setItem('activeTab', targetTab);
}

// Fungsi untuk menampilkan tab dengan animasi smooth
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.opacity = '0';
        tab.style.transition = 'opacity 0.1s ease-in-out';
        setTimeout(() => {
            tab.style.display = 'none';
        }, 500);
    });
    
    const targetTab = document.getElementById(tabId);
    setTimeout(() => {
        targetTab.style.display = 'block';
        setTimeout(() => {
            targetTab.style.opacity = '1';
        }, 50);
    }, 500);
}

// Tambahkan event listener untuk setiap tab
document.querySelectorAll('nav a, .text-gradient[data-tab]').forEach(tab => {
    tab.addEventListener('click', handleTabClick);
});

// Cek apakah ada tab aktif yang tersimpan di localStorage
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        showTab(activeTab);
    } else {
        showTab('intro'); // Tab default jika tidak ada yang tersimpan
    }
});
