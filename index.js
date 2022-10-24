var shopping = [
      {
        id: 1,
        name: 'curl',
        price: 1500,
        image:
          'https://litb-cgis.rightinthebox.com/webp_desc_image/202112/bps/desc/inc/qiopwe1639551513384.jpg?com=1&fmt=webp&v=1',
      },
      {
        id: 1,
        name: 'afro curl',
        price: 300,
        image:
          'https://litb-cgis.rightinthebox.com/webp_desc_image/202112/bps/desc/inc/modupa1639549227863.jpg?com=1&fmt=webp&v=1',
      },
      {
        id: 1,
        name: 'Short Brazilian',
        price: 550,
        image:
          'https://media.takealot.com/covers_images/60c09aa7cc2d4e3facfd04828859b564/s-pdpxl.file',
      },
      {
        id: 1,
        name: 'Curl Brazilian',
        price: 1000,
        image:
          'https://cdn.shopify.com/s/files/1/0180/6221/products/IMG_2575_e0dbb421-948c-494f-9a53-9cb47383ab6c_620x.jpg?v=1626355737',
      },
      { id: 1,
        name: 'Lace Wig Brazilian',
        price: 2500,
        image:
          'https://cdn.shopify.com/s/files/1/0180/6221/products/4x4Straight24_620x.jpg?v=1634025932',
      },
      {
        id: 3,
        name: 'Afro-Textured Hair',
        price: 350,
        image:
          'https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/articles-2/hair-porosity/loreal-paris-article-what-is-hair-porosity-and-how-to-do-a-porosity-test-d.jpg',
      },
      {
        id: 4,
        name: 'brazilian straight',
        price: 2000,
        image:
          'https://cdn.shopify.com/s/files/1/0527/9766/9546/products/Kourt2_900x.png?v=1645601569',
      },
      {
        id: 5,
        name: 'bob brazilian',
        price: 500,
        image:
          'https://s.alicdn.com/@sc04/kf/Hb452a05eed8743aeabe72fac6e41421bk.jpg_220x220.jpg',
      },
]

var buybrazilian = []

const hair = document.getElementById("hair")
const displaypicture = document.getElementById("displaypicture")
const alltotal = document.getElementById('alltotal')

// FUNCTION INTO HTML DISPLAY
function displayid() {
  
  hair.innerHTML = ""
  for (let i = 0; i < shopping.length; i++) {
    hair.innerHTML += `<div class="row" id="hair">
    <div class="card">
      <img
        class="productImage"
        src="${shopping[i].image}"
        alt=""
      />
      <div class="cardTitle">${shopping[i].name}</div>
      <div class="product__rate">
      </div>
      <div class="cardPrice">R<span>${shopping[i].price}</span></div>
      <button class="number2" onclick="cardbutton(${i})">+ Buy now</button>
    </div>`
    
  }
  countcart.innerHTML = buybrazilian.length
}

//  FUNCTION INTO HTML TO CART
function cardbutton(i) {
  buybrazilian.push(shopping[i])
   
   
   totalprice()
   saveToLocalStorage()
   getToLocalStorage()
   price()
   displayid()
}

// FUNCTION FOR DISPLAY PICTURE
function price() {
  
  displaypicture.innerHTML = ""
  for (let i = 0; i < buybrazilian.length; i++) {
    displaypicture.innerHTML += `<div class="row" id="hair">
    <div class="card">
      <img
        class="productImage"
        src="${buybrazilian[i].image}
        alt=""
      />
      <div class="cardTitle">${buybrazilian[i].name}</div>
      <div class="product__rate">
      </div>
      <div class="cardPrice">R<span>${buybrazilian[i].price}</span></span></div>
      <button class="number2" onclick="remove(${i})">- DELETE</button>
    </div>`
    
  }
  
}

// REMOVE LOOPING DISPLAY
function remove(i) {
  buybrazilian.splice(i, 1)
    document.getElementById('countcart').innerHTML = buybrazilian.length;

   totalprice()
   saveToLocalStorage()
   getToLocalStorage()
   price()
   displayid()
}


// ADD FUNCTION HTML TO TOTAL AND CALCULATOR
function totalprice() {
  
  let total = 0;
  
  for (let i = 0; i < buybrazilian.length; i++) {
    total += buybrazilian[i].price 
  }
  alltotal.innerHTML = `R${total}`
  saveToLocalStorage()
  getToLocalStorage()
  
}

function saveToLocalStorage() {
  let data = JSON.stringify(buybrazilian)
  localStorage.setItem('buybrazilian', data)
}

function getToLocalStorage() {
 let data = JSON.parse(localStorage.getItem('buybrazilian'))
 buybrazilian = data
}
getToLocalStorage()
displayid()
price()
