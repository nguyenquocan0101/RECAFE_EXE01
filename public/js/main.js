// Script file cho RE:CAFÉ
// Trong tương lai bạn có thể thêm logic cho Shopping Cart, Product Filter tại đây

document.addEventListener('DOMContentLoaded', () => {
    console.log('RE:CAFÉ - Think smart. Build better.');
    
    // Tải Header và Footer tự động
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');

    // Ví dụ: Logic cho nút "Add to Cart"
    const addToCartButtons = document.querySelectorAll('button span:contains("add_shopping_cart")');
    addToCartButtons.forEach(btn => {
        btn.parentElement.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
});

async function loadComponent(placeholderId, componentPath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        placeholder.innerHTML = html;
        
        // Kích hoạt lại các hiệu ứng nếu cần sau khi load component
        console.log(`Component loaded: ${componentPath}`);
    } catch (error) {
        console.error(`Error loading component: ${componentPath}`, error);
    }
}
