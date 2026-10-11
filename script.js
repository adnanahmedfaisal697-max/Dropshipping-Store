document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadBanner();
});

function loadProducts() {
    const container = document.getElementById('product-container');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.length === 0) {
        container.innerHTML = '<p class="text-center">কোনো প্রোডাক্ট পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে যোগ করুন।</p>';
        return;
    }

    container.innerHTML = products.map(prod => `
        <div class="bg-white rounded-lg shadow-sm border p-4 mb-4">
            <img src="${prod.img}" alt="${prod.name}" class="w-full h-40 object-cover rounded-md mb-2">
            <h4 class="font-bold text-lg mb-1">${prod.name}</h4>
            <p class="text-indigo-600 font-bold mb-3">$${prod.price}</p>
            <button onclick="saveOrder('${prod.name}', '${prod.price}')" class="w-full bg-indigo-600 text-white font-bold py-2 rounded-md hover:bg-indigo-700 transition duration-200"> Buy Now </button>
        </div>
    `).join('');
}

function saveOrder(productName, price) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({ productName, price });
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('অর্ডার সাবমিট হয়েছে!');
}

function loadBanner() {
    // Banner loading logic
}

