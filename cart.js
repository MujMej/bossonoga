// ========================================
// BOSSONOGA - Shopping Cart Functionality
// ========================================

const BOSSONOGA_CONFIG = {
    orderEmail: 'contact.bossonoga@gmail.com',
    whatsappNumber: '38762456915', // unesi broj bez znaka +, npr. 3876XXXXXXX
    web3FormsAccessKey: '' // unesi Web3Forms access key za pravo automatsko slanje emaila
};

class ShoppingCart {
    constructor() {
        this.items = [];
        this.storageKey = 'bossonoga_cart';
        this.loadFromStorage();
    }

    addItem(product, options = {}) {
        const normalizedOptions = this.normalizeOptions(options);

        const existingItem = this.items.find(item =>
            item.id === product.id &&
            item.variant === normalizedOptions.variant &&
            item.size === normalizedOptions.size &&
            JSON.stringify(item.meta || {}) === JSON.stringify(normalizedOptions.meta || {})
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
                quantity: Number(options.quantity) || 1,
                icon: product.icon || 'fa-leaf',
                image: product.image || '',
                meta: normalizedOptions.meta || {}
            });
        }

        this.saveToStorage();
        this.updateUI();
        this.showSuccessMessage(this.buildSuccessMessage(product.name, normalizedOptions));
    }

    addCustomItem(customItem) {
        this.items.push({
            id: customItem.id || `custom-${Date.now()}`,
            name: customItem.name || 'Prilagođeni paket',
            price: Number(customItem.price) || 0,
            variant: customItem.variant || null,
            size: customItem.size || null,
            quantity: Number(customItem.quantity) || 1,
            icon: customItem.icon || 'fa-gift',
            image: customItem.image || '',
            meta: customItem.meta || {}
        });

        this.saveToStorage();
        this.updateUI();
        this.showSuccessMessage(`${customItem.name} dodato u korpu!`);
    }

    normalizeOptions(options) {
        return {
            variant: options?.variant || null,
            size: options?.size || null,
            meta: options?.meta || {}
        };
    }

    buildSuccessMessage(productName, options) {
        const details = [options.variant, options.size].filter(Boolean).join(' / ');
        return details ? `${productName} (${details}) dodato u korpu!` : `${productName} dodato u korpu!`;
    }

    removeItem(id, variant = null, size = null) {
        const index = this.items.findIndex(item =>
            item.id === id && item.variant === variant && item.size === size
        );

        if (index === -1) return;

        this.items.splice(index, 1);
        this.saveToStorage();
        this.updateUI();
    }

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

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getShippingCost(deliveryMethod, paymentMethod) {
        if (deliveryMethod === 'local') return 0;
        if (deliveryMethod === 'post') {
            if (paymentMethod === 'racun') return 8;
            if (paymentMethod === 'pouzece') return 10;
        }
        return 0;
    }

    getTotal(deliveryMethod = 'local', paymentMethod = 'pouzece') {
        return this.getSubtotal() + this.getShippingCost(deliveryMethod, paymentMethod);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateUI();
    }

    saveToStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }

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

    updateUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartFooter();
        this.updateCheckoutSummary();
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (!cartCount) return;

        const count = this.getItemCount();
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }

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
            const details = buildCartItemDetails(item);
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
                            ${details ? `<br><small style="color: var(--grey);">${details}</small>` : ''}
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

    updateCheckoutSummary() {
        const checkoutModal = document.getElementById('checkout-modal');
        if (!checkoutModal || !checkoutModal.classList.contains('active')) return;

        populateCheckoutSummary();
    }

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
}

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
// Gift Builder functions
// ========================================
function openGiftBuilder() {
    const modal = document.getElementById('gift-builder-modal');
    if (!modal) return;

    renderGiftBuilderProducts();
    updateGiftBuilderSummary();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGiftBuilder() {
    const modal = document.getElementById('gift-builder-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderGiftBuilderProducts() {
    const container = document.getElementById('gift-builder-products');
    if (!container || typeof getAllProductsForGiftBuilder !== 'function') return;

    const allProducts = getAllProductsForGiftBuilder();

    container.innerHTML = allProducts.map(product => {
        const price = getBaseProductPrice(product);
        return `
            <label style="display:flex; justify-content:space-between; gap:1rem; padding:0.8rem 0; border-bottom:1px solid rgba(0,0,0,0.08);">
                <span>
                    <input type="checkbox" class="gift-product-checkbox" value="${escapeHtml(product.id)}" data-category="${escapeHtml(product.category)}">
                    ${escapeHtml(product.name)}
                </span>
                <strong>${formatPrice(price)}</strong>
            </label>
        `;
    }).join('');
}

function getBaseProductPrice(product) {
    if (Array.isArray(product.sizeOptions) && product.sizeOptions.length > 0) {
        const first = product.sizeOptions[0];
        if (typeof first === 'object') {
            return Number(first.price || 0);
        }
    }
    return Number(product.price || 0);
}

function getGiftPackageExtra(packageType) {
    if (packageType === 'wrap') return 2;
    if (packageType === 'card') return 5;
    return 0;
}

function getGiftPackageLabel(packageType) {
    if (packageType === 'wrap') return 'Samo poklon pakovanje (+2 KM)';
    if (packageType === 'card') return 'Poklon pakovanje + ručno rađena kartica (+5 KM)';
    return 'Bez posebne ambalaže';
}

function getSelectedGiftProducts() {
    const checkboxes = Array.from(document.querySelectorAll('.gift-product-checkbox:checked'));

    return checkboxes.map(checkbox => {
        const product = findProduct(checkbox.value, checkbox.dataset.category);
        if (!product) return null;

        return {
            id: product.id,
            category: product.category,
            name: product.name,
            price: getBaseProductPrice(product)
        };
    }).filter(Boolean);
}

function updateGiftBuilderSummary() {
    const summary = document.getElementById('gift-builder-summary');
    const totalEl = document.getElementById('gift-builder-total');
    const packageTypeField = document.getElementById('gift-package-type');
    const messageGroup = document.getElementById('gift-message-group');

    if (!summary || !totalEl || !packageTypeField) return;

    const selectedProducts = getSelectedGiftProducts();
    const packageType = packageTypeField.value || 'none';
    const productsTotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    const packageExtra = getGiftPackageExtra(packageType);
    const total = productsTotal + packageExtra;

    if (messageGroup) {
        messageGroup.style.display = packageType === 'card' ? 'block' : 'none';
    }

    if (selectedProducts.length === 0) {
        summary.innerHTML = '<p style="color: var(--grey);">Još niste odabrali proizvode.</p>';
        totalEl.textContent = '0 KM';
        return;
    }

    summary.innerHTML = `
        ${selectedProducts.map(product => `
            <div class="checkout-item">
                <span>${escapeHtml(product.name)}</span>
                <span>${formatPrice(product.price)}</span>
            </div>
        `).join('')}
        <div class="checkout-item" style="margin-top: 1rem; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1rem;">
            <span>Međuzbir proizvoda</span>
            <span>${formatPrice(productsTotal)}</span>
        </div>
        <div class="checkout-item">
            <span>${escapeHtml(getGiftPackageLabel(packageType))}</span>
            <span>${formatPrice(packageExtra)}</span>
        </div>
    `;

    totalEl.textContent = formatPrice(total);
}

function handleGiftBuilderSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const selectedProducts = getSelectedGiftProducts();

    if (selectedProducts.length === 0) {
        alert('Odaberite bar jedan proizvod za poklon paket.');
        return;
    }

    const packageType = form.giftPackageType.value || 'none';
    const packageExtra = getGiftPackageExtra(packageType);
    const productsTotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
    const total = productsTotal + packageExtra;

    cart.addCustomItem({
        id: `gift-package-${Date.now()}`,
        name: 'Poklon paket po želji',
        price: total,
        quantity: 1,
        icon: 'fa-gift',
        image: '',
        meta: {
            type: 'giftPackage',
            selectedProducts,
            packageType,
            packageExtra,
            recipient: form.giftRecipient.value.trim(),
            occasion: form.giftOccasion.value.trim(),
            message: form.giftMessage.value.trim()
        }
    });

    form.reset();
    updateGiftBuilderSummary();
    closeGiftBuilder();
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

    updateAddressFields();
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
        const details = buildCartItemDetails(item);
        return `
            <div class="checkout-item">
                <span>
                    ${escapeHtml(item.name)}
                    ${details ? ` <small style="color: var(--grey); display:block; margin-top:0.2rem;">${details}</small>` : ''}
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

async function handleCheckoutSubmit(event) {
    event.preventDefault();

    if (cart.items.length === 0) {
        alert('Vaša korpa je prazna.');
        return;
    }

    const formData = new FormData(event.target);
    const deliveryMethod = formData.get('deliveryMethod') || 'local';
    const paymentMethod = formData.get('paymentMethod') || 'pouzece';

    if (deliveryMethod === 'post' && (!formData.get('address') || !formData.get('city'))) {
        alert('Za dostavu poštom unesite adresu i grad.');
        return;
    }

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

    const mailBody = buildPlainOrderMessage(orderData);
    const emailSent = await sendOrderEmail(orderData, mailBody);
    const whatsappOpened = openWhatsAppOrder(orderData);

    if (!emailSent && !whatsappOpened) {
        openMailtoFallback(orderData, mailBody);
    }

    alert(
        `Hvala ${orderData.customer.name}!\n\n` +
        `Ukupan iznos: ${formatPrice(orderData.total)}.\n` +
        `Ako niste podesili Web3Forms ključ, otvorit će se email nacrt umjesto automatskog slanja.`
    );

    cart.clear();
    closeCheckout();
    event.target.reset();
    updateAddressFields();
}

async function sendOrderEmail(orderData, plainMessage) {
    const accessKey = BOSSONOGA_CONFIG.web3FormsAccessKey.trim();
    if (!accessKey) return false;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `Bossonoga narudžba - ${orderData.customer.name}`,
                from_name: 'Bossonoga sajt',
                replyto: orderData.customer.email,
                email: BOSSONOGA_CONFIG.orderEmail,
                message: plainMessage
            })
        });

        const data = await response.json();
        return Boolean(data && data.success);
    } catch (error) {
        console.error('Greška pri slanju narudžbe:', error);
        return false;
    }
}

function openWhatsAppOrder(orderData) {
    const whatsappNumber = BOSSONOGA_CONFIG.whatsappNumber.trim();
    if (!whatsappNumber) return false;

    const whatsappMessage = buildWhatsAppMessage(orderData);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    return true;
}

function openMailtoFallback(orderData, plainMessage) {
    const subject = `Bossonoga narudžba - ${orderData.customer.name}`;
    const mailtoLink = `mailto:${encodeURIComponent(BOSSONOGA_CONFIG.orderEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainMessage)}`;
    window.location.href = mailtoLink;
}

// ========================================
// Message builders
// ========================================
function buildWhatsAppMessage(orderData) {
    return buildPlainOrderMessage(orderData);
}

function buildPlainOrderMessage(orderData) {
    const itemLines = orderData.items.flatMap((item, index) => {
        const baseLine = `${index + 1}. ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`;
        const details = getItemLinesForMessage(item);
        return [baseLine, ...details.map(line => `   - ${line}`)];
    });

    return [
        'Nova Bossonoga narudžba',
        '',
        `Ime i prezime: ${orderData.customer.name}`,
        `Email: ${orderData.customer.email}`,
        `Telefon: ${orderData.customer.phone}`,
        `Adresa: ${orderData.customer.address || 'Lično preuzimanje / dogovor'}`,
        `Grad: ${orderData.customer.city || 'Banja Luka'}`,
        `Način dostave: ${getDeliveryMethodLabel(orderData.deliveryMethod)}`,
        `Način plaćanja: ${getPaymentMethodLabel(orderData.paymentMethod)}`,
        orderData.customer.note ? `Napomena: ${orderData.customer.note}` : '',
        '',
        'Stavke narudžbe:',
        ...itemLines,
        '',
        `Međuzbir: ${formatPrice(orderData.subtotal)}`,
        `Poštarina: ${formatPrice(orderData.shipping)}`,
        `Ukupno: ${formatPrice(orderData.total)}`
    ].filter(Boolean).join('\n');
}

// ========================================
// Utility helpers
// ========================================
function buildCartItemDetails(item) {
    const details = [item.variant, item.size].filter(Boolean).map(escapeHtml);

    if (item.meta?.type === 'giftPackage') {
        if (Array.isArray(item.meta.selectedProducts) && item.meta.selectedProducts.length > 0) {
            details.push(`Sadržaj: ${item.meta.selectedProducts.map(product => escapeHtml(product.name)).join(', ')}`);
        }

        if (item.meta.packageType) {
            details.push(escapeHtml(getGiftPackageLabel(item.meta.packageType)));
        }

        if (item.meta.recipient) {
            details.push(`Za: ${escapeHtml(item.meta.recipient)}`);
        }

        if (item.meta.occasion) {
            details.push(`Povod: ${escapeHtml(item.meta.occasion)}`);
        }

        if (item.meta.message) {
            details.push(`Kartica: ${escapeHtml(item.meta.message)}`);
        }
    }

    return details.join(' • ');
}

function getItemLinesForMessage(item) {
    const lines = [];

    if (item.variant) lines.push(`Varijanta: ${item.variant}`);
    if (item.size) lines.push(`Veličina: ${item.size}`);

    if (item.meta?.type === 'giftPackage') {
        if (Array.isArray(item.meta.selectedProducts) && item.meta.selectedProducts.length > 0) {
            lines.push(`Sadržaj paketa: ${item.meta.selectedProducts.map(product => `${product.name} (${formatPrice(product.price)})`).join(', ')}`);
        }

        lines.push(`Pakovanje: ${getGiftPackageLabel(item.meta.packageType)}`);

        if (item.meta.recipient) lines.push(`Kome je poklon: ${item.meta.recipient}`);
        if (item.meta.occasion) lines.push(`Povod: ${item.meta.occasion}`);
        if (item.meta.message) lines.push(`Kartica / instrukcija: ${item.meta.message}`);
    }

    return lines;
}

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
    if (value === 'local') return 'Plaćanje prilikom preuzimanja';
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

function updateAddressFields() {
    const deliveryMethodField = document.getElementById('delivery-method');
    const paymentMethodField = document.getElementById('payment-method');
    const addressField = document.getElementById('checkout-address');
    const cityField = document.getElementById('checkout-city');

    if (!deliveryMethodField || !paymentMethodField || !addressField || !cityField) return;

    const isPost = deliveryMethodField.value === 'post';
    addressField.required = isPost;
    cityField.required = isPost;

    if (!isPost) {
        addressField.value = '';
        cityField.value = 'Banja Luka';
        paymentMethodField.value = 'pouzece';
    }
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

    const giftBuilderOpenButtons = document.querySelectorAll('[data-open-gift-builder]');
    const giftBuilderModal = document.getElementById('gift-builder-modal');
    const giftBuilderOverlay = document.getElementById('gift-builder-overlay');
    const closeGiftBuilderBtn = document.getElementById('close-gift-builder');
    const giftBuilderForm = document.getElementById('gift-builder-form');
    const giftPackageTypeField = document.getElementById('gift-package-type');

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    if (deliveryMethodField) {
        deliveryMethodField.addEventListener('change', () => {
            updateAddressFields();
            populateCheckoutSummary();
        });
    }

    if (paymentMethodField) {
        paymentMethodField.addEventListener('change', populateCheckoutSummary);
    }

    if (giftBuilderOverlay) giftBuilderOverlay.addEventListener('click', closeGiftBuilder);
    if (closeGiftBuilderBtn) closeGiftBuilderBtn.addEventListener('click', closeGiftBuilder);
    if (giftBuilderForm) giftBuilderForm.addEventListener('submit', handleGiftBuilderSubmit);
    if (giftPackageTypeField) giftPackageTypeField.addEventListener('change', updateGiftBuilderSummary);

    document.addEventListener('change', event => {
        if (event.target.classList.contains('gift-product-checkbox')) {
            updateGiftBuilderSummary();
        }
    });

    updateAddressFields();
});
