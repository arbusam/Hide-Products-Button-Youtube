let countdown = 0

async function hide_button() {
    const productButton = document.querySelector('[aria-label="View products"]');

    if (productButton) {
        console.log('Product button found');
        while (true) {
            productButton = document.querySelector('[aria-label="View products"]');
            if (!productButton) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                continue
            }
            productButton.style.display = 'none';
        }
    } else {
        if (countdown < 20) {
            countdown++;
            setTimeout(hide_button, 500);
        }
    }
}

setTimeout(hide_button, 500);