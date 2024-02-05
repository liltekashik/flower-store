// Ваш файл скрипта (script.js)

function addToCart(button) {
    var product = button.closest('.product');
    var productName = product.querySelector('h2').textContent;
    
    // Создаем новый элемент для корзины
    var cartItem = document.createElement('li');
    cartItem.textContent = productName;
  
    // Добавляем товар в корзину
    document.getElementById('cart-items').appendChild(cartItem);
  
    // Показываем корзину (если она скрыта)
    document.getElementById('cart').style.display = 'block';
  
    // Добавьте здесь дополнительные действия, такие как обновление общей суммы, отправка на сервер и т. д.
  }
  