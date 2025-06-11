const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
const body = document.body;

const cartButton = document.querySelector('.cart-button');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartCloseBtn = document.querySelector('.cart-close-btn');

const watchPrices = {
    "5227J-001": "₱2,508,771.44",
    "5712/1R-001": "₱5,191,400",
    "5167R-001": "₱4,360,000",
    "5396R-011": "₱3,460,000",
    "5327R-001": "₱6,414,000",
    "5738/1R-001": "₱3,473,000",
    "7128/1R-001": "₱4,494,000",
    "7041R-001": "₱2,254,000",
    "7300/1200R-001": "₱3,170,000"
};


sidebarToggle.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    body.classList.add('sidebar-open');
});

sidebarCloseBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    body.classList.remove('sidebar-open');
});


cartButton.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartButton.style.display = 'none';
    body.classList.add('cart-open');
});

cartCloseBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    cartButton.style.display = 'block';
    body.classList.remove('cart-open');
});


const gridItems = document.querySelectorAll('.griddes a');
const popup = document.querySelector('.popup-window');
const popupCloseBtn = popup.querySelector('.popup-close-btn');
const popupTitle = popup.querySelector('#popup-title');
const popupContent = popup.querySelector('#popup-content');

gridItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const title = item.querySelector('p').textContent;
        const imgSrc = item.querySelector('img').src;

        popupTitle.textContent = title;

        let extraInfo = '';

        switch (title) {
            case 'Calatrava':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5227J-001</p>
                        <p><strong>Dial:</strong> Lacquered ivory, yellow gold applied faceted trapeze-style hour markers. Yellow gold faceted dauphine-style hands.</p>
                        <p><strong>Case:</strong> Yellow gold. Diameter: 39 mm. Thickness: 9.24 mm. Water-resistant to 30m. Sapphire crystal case back protected by a dust cover with invisible hinges.</p>
                        <p><strong>Strap:</strong> Alligator leather with square scales, shiny chocolate brown. Yellow gold prong buckle.</p>
                        <p><strong>Movement:</strong> 26-330 S C - Self-winding, Date in an aperture, Sweep seconds</p>
                    </div>
                `;
                break;
            case 'Nautilus':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5712/1R-001</p>
                        <p><strong>Dial:</strong> Sunburst brown with black-gradient rim, horizontally embossed, rose gold applied baton-style hour markers with white luminescent coating. Rose gold rounded baton-style hands with white luminescent coating.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter (10-4 o'clock): 40 mm. Thickness: 8.52 mm. Water-resistant to 30m. Screw-down crown. Sapphire crystal case back.</p>
                        <p><strong>Bracelet:</strong> Or rose. Rose gold patented fold-over clasp. Lockable adjustment system.</p>
                        <p><strong>Movement:</strong> 240 PS IRM C LU - Self-winding, Date by hand, Moon phases, Power reserve indication, Small seconds</p>
                    </div>
                `;
                break;
            case 'Aquanaut':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5167R-001</p>
                        <p><strong>Dial:</strong> Sunburst brown with black-gradient rim, embossed Aquanaut pattern, rose gold applied numerals with white luminescent coating. Rose gold baton-style hands with white luminescent coating.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter (10-4 o'clock): 40.8 mm. Thickness: 8.1 mm. Water-resistant to 30m. Screw-down crown. Sapphire crystal case back.</p>
                        <p><strong>Movement:</strong> 26-330 S C - Self-winding, Date in an aperture, Sweep seconds</p>
                    </div>
                `;
                break;
            case 'Complications':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5396R-011</p>
                        <p><strong>Dial:</strong> Silvery opaline, rose gold applied faceted "obus"- style hour markers. Rose gold faceted dauphine-style hands.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter: 38.5 mm. Thickness: 11.2 mm. Water-resistant to 30m. Sapphire crystal case back.</p>
                        <p><strong>Strap:</strong> Alligator leather with square scales, hand-stitched, shiny chocolate brown. Rose gold fold-over clasp.</p>
                        <p><strong>Movement:</strong> 26-330 S QA LU 24H - Self-winding, Annual Calendar, Day, date and month in apertures, Moon phases, 24-hour indication, Sweep seconds</p>
                    </div>
                `;
                break;
            case 'Grand Complications':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5327R-001</p>
                        <p><strong>Dial:</strong> Lacquered ivory, rose gold applied Breguet numerals. Rose gold leaf-shaped hands.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter: 39 mm. Thickness: 9.71 mm. Water-resistant to 30m. Sapphire crystal case back.</p>
                        <p><strong>Strap:</strong> Alligator leather with square scales, hand-stitched, shiny dark chestnut. Rose gold fold-over clasp.</p>
                        <p><strong>Movement:</strong> 240 Q - Self-winding, Perpetual calendar, Day, date, month, leap year and 24-hour indication by hands, Moon phases</p>
                    </div>
                `;
                break;
            case 'Golden Ellipse':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 5738/1R-001</p>
                        <p><strong>Dial:</strong> Sunburst ebony black, rose gold applied baton-style hour markers. 18K gold dial plate. Rose gold cheveu-style hands.</p>
                        <p><strong>Case:</strong> Rose gold. Dimensions: 34.5 x 39.5 mm. Thickness: 5.9 mm. Water-resistant to 30m. Solid case back.</p>
                        <p><strong>Bracelet:</strong> Or rose. Fermoir grave en or rose avec trois crans d'ajustement.</p>
                        <p><strong>Movement:</strong> 240 - Self-winding</p>
                    </div>
                `;
                break;
            case 'Cubitus':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 7128/1R-001</p>
                        <p><strong>Dial:</strong> Sunburst brown, horizontally embossed, rose gold applied baton-style hour markers with white luminescent coating. Rose gold rounded baton-style hands with white luminescent coating.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter (10-4 o'clock): 40 mm. Thickness: 8.5 mm. Water-resistant to 30m. Screw-down crown. Sapphire crystal case back.</p>
                        <p><strong>Bracelet:</strong> Or rose. Rose gold patented fold-over clasp. Lockable adjustment system.</p>
                        <p><strong>Movement:</strong> 26-330 S C - Self-winding, Date in an aperture, Sweep seconds</p>
                    </div>
                `;
                break;
            case 'Gondolo':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 7041R-001</p>
                        <p><strong>Dial:</strong> Silvery grained, brown transfer-printed roman numerals. Rose gold leaf-shaped hands with white luminescent coating.</p>
                        <p><strong>Case:</strong> Rose gold. Dimensions: 30 x 33.8 mm. Thickness: 7.6 mm. Water-resistant to 30m. Sapphire crystal case back.</p>
                        <p><strong>Gemsetting:</strong> Dial flange: 108 diamonds (0.34 ct).</p>
                        <p><strong>Strap:</strong> Alligator leather with square scales, hand-stitched, shiny dark chestnut. Rose gold prong buckle.</p>
                        <p><strong>Movement:</strong> 215 PS - Manual winding, Small seconds</p>
                    </div>
                `;
                break;
            case 'Twenty~4':
                extraInfo = `
                    <div class="watch-details">
                        <p><strong>Reference Number:</strong> 7300/1200R-001</p>
                        <p><strong>Dial:</strong> Sunburst brown, rose gold applied numerals with white luminescent coating. Rose gold rounded baton-style hands with white luminescent coating.</p>
                        <p><strong>Case:</strong> Rose gold. Diameter: 36 mm. Thickness: 10.05 mm. Water-resistant to 30m. Sapphire crystal case back.</p>
                        <p><strong>Gemsetting:</strong> Bezel : 160 diamonds (0.81 ct).</p>
                        <p><strong>Bracelet:</strong> Or rose. Rose gold patented fold-over clasp.</p>
                        <p><strong>Movement:</strong> 26-330 S C - Self-winding, Date in an aperture, Sweep seconds</p>
                    </div>
                `;
                break;
            default:
                extraInfo = '<p>No additional info available.</p>';
        }


        const refNumberMatch = extraInfo.match(/<strong>Reference Number:<\/strong>\s*([\w\-\/]+)/);
        const refNumber = refNumberMatch ? refNumberMatch[1] : null;
        const price = refNumber && watchPrices[refNumber] ? watchPrices[refNumber] : "Price not available";

        if (refNumber) {

            extraInfo = extraInfo.replace(
                /(<p><strong>Reference Number:<\/strong>\s*[\w\-\/]+<\/p>)/,
                `$1<p><strong>Price:</strong> ${price}</p>`
            );
        }

        popupContent.innerHTML = `
            <img src="${imgSrc}" alt="${title}" style="width:100%; height:auto; margin-bottom: 1rem;" />
            <div class="details-and-button">
                <div class="watch-details-container">
                    ${extraInfo}
                </div>
                <div class="button-container">
                    <p class="max-limit-note">Maximum 1 per item</p>
                    <button class="add-to-cart-btn" 
                            data-title="${title}" 
                            data-img="${imgSrc}" 
                            data-price="${price}">
                      Add to Cart
                    </button>
                </div>
            </div>
        `;

        popup.classList.remove('hidden');
        body.classList.add('popup-open');
        body.style.overflow = 'hidden';
    });
});

popupCloseBtn.addEventListener('click', () => {
    popup.classList.add('closing');
    body.classList.remove('popup-open');
    body.style.overflow = '';

    popup.addEventListener('animationend', () => {
        popup.classList.remove('closing');
        popup.classList.add('hidden');
    }, { once: true });
});


const cartItems = {};

function updateCartSidebar() {
    const cartList = cartSidebar.querySelector('.cart-items');
    const cartTotalEl = cartSidebar.querySelector('.cart-total');
    cartList.innerHTML = '';

    let total = 0;

    Object.keys(cartItems).forEach(title => {
        const item = cartItems[title];
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <img src="${item.imgSrc}" alt="${title}" class="cart-thumb" />
            <div class="cart-info">
                <p class="cart-title">${title}</p>
                <p class="cart-price">Price: ${item.price}</p>
                <p class="cart-qty">Qty: ${item.quantity}</p>
            </div>
            <button class="remove-from-cart-btn" data-title="${title}">✕</button>
        `;
        cartList.appendChild(li);

        const priceNum = Number(item.price.replace(/[^0-9.-]+/g, ""));
        total += priceNum * item.quantity;
    });

    const totalFormatted = total.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
    cartTotalEl.textContent = `Total: ${totalFormatted}`;
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const title = e.target.getAttribute('data-title');
        const imgSrc = e.target.getAttribute('data-img');
        const price = e.target.getAttribute('data-price');

        if (!cartItems[title]) {
            cartItems[title] = {
                imgSrc,
                quantity: 1,
                price
            };
            updateCartSidebar();
            alert(`${title} added to your cart at price ${price}.`);

            popup.classList.add('closing');
            body.classList.remove('popup-open');
            body.style.overflow = '';
            popup.addEventListener('animationend', () => {
                popup.classList.remove('closing');
                popup.classList.add('hidden');
            }, { once: true });
        } else {
            alert(`You can only add one of "${title}".`);
        }
    }
    if (e.target.classList.contains('remove-from-cart-btn')) {
        const title = e.target.getAttribute('data-title');
        if (cartItems[title]) {
            delete cartItems[title];
            updateCartSidebar();
        }
    }

});

const checkoutPopup = document.getElementById('checkout-popup');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutCloseBtn = checkoutPopup.querySelector('.popup-close-btn');

function openCheckoutPopup() {
    if (Object.keys(cartItems).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const cartTotal = cartSidebar.querySelector('.cart-total').textContent;
    alert(`Proceed to Checkout`);

    checkoutPopup.classList.remove('hidden');
    body.classList.add('popup-open');
    checkoutPopup.focus();
}

function closeCheckoutPopup() {
    checkoutPopup.classList.add('closing');

    checkoutPopup.addEventListener('animationend', () => {
        checkoutPopup.classList.add('hidden');
        checkoutPopup.classList.remove('closing');
    }, { once: true });

    body.classList.remove('popup-open');
}

checkoutBtn.addEventListener('click', openCheckoutPopup);
checkoutCloseBtn.addEventListener('click', closeCheckoutPopup);

const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!firstName || !lastName || !address || !cardNumber || !amount) {
        alert('Please fill out all required fields.');
        return;
    }

    alert('Payment is successful');
    closeCheckoutPopup();

    paymentForm.reset();

    for (const key in cartItems) delete cartItems[key];
    updateCartSidebar();
});

function updateCheckoutAmount() {
    let total = 0;
    Object.values(cartItems).forEach(item => {
        const priceNum = Number(item.price.replace(/[^0-9.-]+/g, ""));
        total += priceNum * item.quantity;
    });
    document.getElementById('amount').value = total.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
}

checkoutBtn.addEventListener('click', updateCheckoutAmount);
