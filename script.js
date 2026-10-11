document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadBanner();
});

function loadProducts() {
  const container = document.getElementById('product-list');
  const products = JSON.parse(localStorage.getItem('ds_products') || '[]');

  if (products.length === 0) {
    container.innerHTML = '<p class="text-gray-500 col-span-full text-center py-6">কোনো প্রোডাক্ট পাওয়া যায়নি। এডমিন প্যানেল থেকে যোগ করুন।</p>';
    return;
  }

  container.innerHTML = products.map(prod => `
    <div class="bg-white rounded-lg border shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between">
      <div>
        <img src="${prod.img}" alt="${prod.name}" class="w-full h-48 object-cover rounded mb-4">
        <h4 class="font-bold text-gray-800 text-lg mb-1">${prod.name}</h4>
        <p class="text-indigo-600 font-bold mb-4">$${prod.price}</p>
      </div>
      <button onclick="alert('অর্ডার সাবমিট হয়েছে!')" class="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition text-sm font-semibold">Buy Now</button>
    </div>
  `).join('');
}

function loadBanner() {
  const bannerContainer = document.getElementById('bottom-banner-container');
  const bannerData = JSON.parse(localStorage.getItem('ds_banner') || 'null');

  if (bannerData && bannerData.img) {
    bannerContainer.innerHTML = `
      <a href="${bannerData.link || '#'}" target="_blank" class="block w-full text-center">
        <img src="${bannerData.img}" alt="Advertisement Banner" class="mx-auto rounded hover:opacity-95 transition">
      </a>
    `;
  } else {
    bannerContainer.innerHTML = `
      <div class="p-4 text-center text-gray-400 text-sm italic">
        [ এখানে আপনার ব্যানার এড প্রদর্শিত হবে - এডমিন প্যানেল থেকে সেট করুন ]
      </div>
    `;
  }
}
