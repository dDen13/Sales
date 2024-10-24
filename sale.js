// Модальное окно
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

function closeModal() {

    document.getElementById('myModal').style.display = 'none';

}
document.getElementById('closeModal').addEventListener('click', closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Кошик
let cart = [];

        function addToCart(product) {
            let cartItem = cart.find(item => item.name === product.name);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            viewCart();
        }
        
        function removeFromCart(productName) {
            let cartItem = cart.find(item => item.name === productName);
            if (cartItem) {
                cartItem.quantity--;
                if (cartItem.quantity <= 0) {
                    cart = cart.filter(item => item.name !== productName);
                }
            }
            viewCart();
        }
        
        function viewCart() {
            let cartDiv = document.getElementById('cart');
            cartDiv.innerHTML = '';
            cart.forEach(product => {
                cartDiv.innerHTML += `
                    <p id="nameCart"><strong>${product.name};</strong></p><p class="pCart"> кількість: ${product.quantity}; вартість: ${product.quantity * product.price} грн 
                    <button class="button-35" onclick="removeFromCart('${product.name}')">-</button>
                    <button class="button-35" onclick="addToCart({ name: '${product.name}', price: ${product.price} })">+</button></p>`;
            });
            cartDiv.innerHTML += `<p class="pCart">Всього: ${cart.reduce((total, product) => total + (product.quantity * product.price), 0)} грн</p>`;
        }
//Захований дів
function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    
    if (section.classList.contains('visibleSection')) {
        section.classList.add('hiddenSection');
        section.classList.remove('visibleSection');
    } else {
        let sections = document.querySelectorAll('.hiddenSection, .visibleSection');
        sections.forEach(section => {
            section.classList.add('hiddenSection');
            section.classList.remove('visibleSection');
        });
        
        section.classList.remove('hiddenSection');
        section.classList.add('visibleSection');
    }
}
function closeSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.classList.add('hiddenSection');
    section.classList.remove('visibleSection');
}


//Відправка
function sendMail() {
    let params = {
      surname: document.getElementById("surname").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      text: document.getElementById("text").value
    };
  
    console.log("Params:", params);
  
    const serviceID = "service_6bjw4ej";
    const templateID = "template_e3gcvbx";
  
    console.log("Sending email...");
    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        console.log("Success:", res);
        document.getElementById("surname").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("text").value = "";
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
  