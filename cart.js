// ========================================
// BOSSONOGA - Shopping Cart Functionality
// ========================================

class ShoppingCart {
    constructor() {
        this.items = [];
        this.storageKey = 'bossonoga_cart';
        this.loadFromStorage();
    }

    // Add item to cart
    addItem(product, options = {}) {
        const normalizedOptions = this.normalizeOptions(options);

        const existingItem = this.items.find(item =>
            item.id === product.id &&
            item.variant === normalizedOptions.variant &&
            item.size === normalizedOptions.size
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: Number(product.price) || 0,
                variant: normalizedOptions.variant,
                size: normalizedOptions.size,
                quantity: 1,
                icon: product.icon || 'fa-leaf',
                image: product.image || ''
            });
        }

        this.saveToStorage();
        this.updateUI();
        this.showSuccessMessage(this.buildSuccessMessage(product.name, normalizedOptions));
    }

    normalizeOptions(options) {
        return {
            variant: options?.variant || null,
            size: options?.size || null
        };
    }

    buildSuccessMessage(productName, options) {
        const details = [options.variant, options.size].filter(Boolean).join(' / ');
        return details ? `${productName} (${details}) dodato u korpu!` : `${productName} dodato u korpu!`;
    }

    // Remove item from cart
    removeItem(id, variant = null, size = null) {
        this.items = this.items.filter(item =>
            !(item.id === id && item.variant === variant && item.size === size)
        );

        this.saveToStorage();
        this.updateUI();
    }

    // Update item quantity
    updateQuantity(id, variant, size, quantity) {
        const item = this.items.find(item =>
            item.id === id && item.variant === variant && item.size === size
        );

        if (!item) return;

        if (quantity <= 0) {
            this.removeItem(id, variant, size);
        } else {
            item.quantity = quantity;
            this.saveToStorage();
            this.updateUI();
        }
    }

    // Get cart subtotal
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get shipping cost based on selection
    getShippingCost(deliveryMethod, paymentMethod) {
        if (deliveryMethod === 'local') {
            return 0;
        }

        if (deliveryMethod === 'post') {
            if (paymentMethod === 'racun') return 8;
            if (paymentMethod === 'pouzece') return 10;
        }

        return 0;
    }

    // Get final total
    getTotal(deliveryMethod = 'local', paymentMethod = 'pouzece') {
        return this.getSubtotal() + this.getShippingCost(deliveryMethod, paymentMethod);
    }

    // Get item count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Clear cart
    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateUI();
    }

    // Save to localStorage
    saveToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }

    // Load from localStorage
    loadFromStorage() {
        const saved = localStorage.getItem(this.storageKey);

        if (!saved) {
            this.items = [];
            return;
        }

        try {
            this.items = JSON.parse(saved);
        } catch (error) {
            console.error('Greška pri učitavanju korpe:', error);
            this.items = [];
        }
    }

    // Update UI
    updateUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartFooter();
        this.updateCheckoutSummary();
    }

    // Update cart count badge
    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (!cartCount) return;

        const count = this.getItemCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }

    // Update cart items display
    updateCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Vaša korpa je prazna</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => {
            const details = [item.variant, item.size].filter(Boolean).join(' • ');
            const safeId = escapeJs(item.id);
            const safeVariant = item.variant ? `'${escapeJs(item.variant)}'` : 'null';
            const safeSize = item.size ? `'${escapeJs(item.size)}'` : 'null';

            return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <i class="fas ${escapeHtml(item.icon || 'fa-leaf')}"></i>
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">
                            ${escapeHtml(item.name)}
                            ${details ? `<br><small style="color: var(--grey);">${escapeHtml(details)}</small>` : ''}
                        </div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="cart.updateQuantity('${safeId}', ${safeVariant}, ${safeSize}, ${item.quantity - 1})">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn" onclick="cart.updateQuantity('${safeId}', ${safeVariant}, ${safeSize}, ${item.quantity + 1})">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="remove-item" onclick="cart.removeItem('${safeId}', ${safeVariant}, ${safeSize})">
                                <i class="fas fa-trash"></i> Ukloni
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update cart footer
    updateCartFooter() {
        const cartFooter = document.getElementById('cart-footer');
        const totalPrice = document.getElementById('total-price');

        if (!cartFooter || !totalPrice) return;

        if (this.items.length === 0) {
            cartFooter.style.display = 'none';
        } else {
            cartFooter.style.display = 'block';
            totalPrice.textContent = formatPrice(this.getSubtotal());
        }
    }

    // Update checkout summary if checkout is open
    updateCheckoutSummary() {
        const checkoutModal = document.getElementById('checkout-modal');
        if (!checkoutModal || !checkoutModal.classList.contains('active')) return;

        populateCheckoutSummary();
    }

    // Show success message
    showSuccessMessage(message) {
        const successMsg = document.getElementById('success-message');
        const successText = document.getElementById('success-text');

        if (!successMsg || !successText) return;

        successText.textContent = message;
        successMsg.classList.add('show');

        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 3000);
    }

    // Get cart data for checkout
    getCheckoutData(deliveryMethod = 'local', paymentMethod = 'pouzece') {
        return {
            items: this.items,
            subtotal: this.getSubtotal(),
            shipping: this.getShippingCost(deliveryMethod, paymentMethod),
            total: this.getTotal(deliveryMethod, paymentMethod),
            itemCount: this.getItemCount()
        };
    }
}

// Initialize cart
const cart = new ShoppingCart();

// ========================================
// Cart modal functions
// ========================================
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (!cartModal) return;

    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (!cartModal) return;

    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Checkout functions
// ========================================
function openCheckout() {
    if (cart.items.length === 0) {
        alert('Vaša korpa je prazna!');
        return;
    }

    closeCart();

    const checkoutModal = document.getElementById('checkout-modal');
    if (!checkoutModal) return;

    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    populateCheckoutSummary();
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    if (!checkoutModal) return;

    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function populateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');

    if (!checkoutItems || !checkoutTotal) return;

    const deliveryMethod = getFieldValue('delivery-method', 'local');
    const paymentMethod = getFieldValue('payment-method', 'pouzece');

    const subtotal = cart.getSubtotal();
    const shipping = cart.getShippingCost(deliveryMethod, paymentMethod);
    const total = cart.getTotal(deliveryMethod, paymentMethod);

    const itemRows = cart.items.map(item => {
        const details = [item.variant, item.size].filter(Boolean).join(' • ');
        return `
            <div class="checkout-item">
                <span>
                    ${escapeHtml(item.name)}
                    ${details ? ` <small style="color: var(--grey);">(${escapeHtml(details)})</small>` : ''}
                    x${item.quantity}
                </span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
    }).join('');

    checkoutItems.innerHTML = `
        ${itemRows}
        <div class="checkout-item" style="margin-top: 1rem; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1rem;">
            <span>Međuzbir</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="checkout-item">
            <span>Poštarina</span>
            <span>${shipping === 0 ? '0 KM' : formatPrice(shipping)}</span>
        </div>
    `;

    checkoutTotal.textContent = formatPrice(total);
}

// Handle checkout form submission
function handleCheckoutSubmit(event) {
    event.preventDefault();

    if (cart.items.length === 0) {
        alert('Vaša korpa je prazna.');
        return;
    }

    const formData = new FormData(event.target);

    const deliveryMethod = formData.get('deliveryMethod') || 'local';
    const paymentMethod = formData.get('paymentMethod') || 'pouzece';

    const orderData = {
        customer: {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            address: formData.get('address') || '',
            city: formData.get('city') || '',
            note: formData.get('note') || ''
        },
        deliveryMethod,
        paymentMethod,
        items: cart.items,
        subtotal: cart.getSubtotal(),
        shipping: cart.getShippingCost(deliveryMethod, paymentMethod),
        total: cart.getTotal(deliveryMethod, paymentMethod),
        date: new Date().toISOString()
    };

    const whatsappNumber = ''; // kasnije unesi broj bez +, npr 3876XXXXXXX
    const whatsappMessage = buildWhatsAppMessage(orderData);
    const mailtoLink = buildMailtoLink(orderData);

    console.log('Order submitted:', orderData);

    if (whatsappNumber) {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    window.location.href = mailtoLink;

    alert(
        `Hvala ${orderData.customer.name}!\n\n` +
        `Narudžba je pripremljena.\n` +
        `Ukupno: ${formatPrice(orderData.total)}\n\n` +
        `Otvara se email za slanje narudžbe` +
        `${whatsappNumber ? ' i WhatsApp poruka.' : '.'}`
    );

    cart.clear();
    closeCheckout();
    event.target.reset();
}

// ========================================
// Message builders
// ========================================
function buildWhatsAppMessage(orderData) {
    const itemsText = orderData.items.map((item, index) => {
        const details = [item.variant, item.size].filter(Boolean).join(' / ');
        return `${index + 1}. ${item.name}${details ? ` (${details})` : ''} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`;
    }).join('\n');

    return [
        'Nova Bossonoga narudžba',
        '',
        `Ime i prezime: ${orderData.customer.name}`,
        `Email: ${orderData.customer.email}`,
        `Telefon: ${orderData.customer.phone}`,
        `Adresa: ${orderData.customer.address}`,
        `Grad: ${orderData.customer.city}`,
        `Dostava: ${getDeliveryMethodLabel(orderData.deliveryMethod)}`,
        `Plaćanje: ${getPaymentMethodLabel(orderData.paymentMethod)}`,
        orderData.customer.note ? `Napomena: ${orderData.customer.note}` : '',
        '',
        'Stavke:',
        itemsText,
        '',
        `Međuzbir: ${formatPrice(orderData.subtotal)}`,
        `Poštarina: ${formatPrice(orderData.shipping)}`,
        `Ukupno: ${formatPrice(orderData.total)}`
    ].filter(Boolean).join('\n');
}

function buildMailtoLink(orderData) {
    const subject = `Bossonoga narudžba - ${orderData.customer.name}`;

    const body = [
        'Nova Bossonoga narudžba',
        '',
        `Ime i prezime: ${orderData.customer.name}`,
        `Email: ${orderData.customer.email}`,
        `Telefon: ${orderData.customer.phone}`,
        `Adresa: ${orderData.customer.address}`,
        `Grad: ${orderData.customer.city}`,
        `Način dostave: ${getDeliveryMethodLabel(orderData.deliveryMethod)}`,
        `Način plaćanja: ${getPaymentMethodLabel(orderData.paymentMethod)}`,
        orderData.customer.note ? `Napomena: ${orderData.customer.note}` : '',
        '',
        'Stavke narudžbe:',
        ...orderData.items.map((item, index) => {
            const details = [item.variant, item.size].filter(Boolean).join(' / ');
            return `${index + 1}. ${item.name}${details ? ` (${details})` : ''} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`;
        }),
        '',
        `Međuzbir: ${formatPrice(orderData.subtotal)}`,
        `Poštarina: ${formatPrice(orderData.shipping)}`,
        `Ukupno: ${formatPrice(orderData.total)}`
    ].filter(Boolean).join('\n');

    return `mailto:contact.bossonoga@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join('\n'))}`;
}

// ========================================
// Utility helpers
// ========================================
function getFieldValue(id, fallback = '') {
    const field = document.getElementById(id);
    return field ? field.value : fallback;
}

function getDeliveryMethodLabel(value) {
    if (value === 'post') return 'Dostava poštom (BiH)';
    return 'Lokalno preuzimanje / dogovor (Banja Luka)';
}

function getPaymentMethodLabel(value) {
    if (value === 'racun') return 'Uplata na račun';
    return 'Plaćanje pouzećem';
}

function formatPrice(value) {
    return `${Number(value || 0)} KM`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeJs(value) {
    return String(value)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

// ========================================
// Initialize cart UI on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    cart.updateUI();

    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('checkout-btn');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const checkoutForm = document.getElementById('checkout-form');
    const deliveryMethodField = document.getElementById('delivery-method');
    const paymentMethodField = document.getElementById('payment-method');

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    if (deliveryMethodField) {
        deliveryMethodField.addEventListener('change', populateCheckoutSummary);
    }

    if (paymentMethodField) {
        paymentMethodField.addEventListener('change', populateCheckoutSummary);
    }
});
