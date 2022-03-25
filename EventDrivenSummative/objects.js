let objects = [
    { price: 45000, name: "Yeezy Boost 350 tutle doves", image: "shoes/adidas-yeezy-boost-350-turtle-dove-sneaker-talk.jpg", id: "52951" , brand:"Adidas", quantity:20},
    { price: 50000, name: "Yeezy 350v2 Breds", image: "shoes/adidas-Yeezy-Boost-350-v2-Black-Red-Bred-2020.jpg", id: "52812" , brand:"Adidas", quantity:20},
    { price: 40000, name: "Yeezy Boost 350v2 triple white", image: "shoes/adidas-yeezy-boost-350-v2-cream-white-foot-03.jpg", id: "52943" , brand:"Adidas", quantity:20},
    { price: 3800, name: "Nike air max 91 laser blue", image: "shoes/air max 91 laser blue.jpg", id: "53044" , brand:"Nike", quantity:20},
    { price: 20000, name: "Air Jordan 2 low chicago", image: "shoes/air-jordan-2-low-og-chicago-release-date-01.jpg", id: "52802" , brand:"Jordan", quantity:20},
    { price: 15000, name: "Air Jordan 5 fire red", image: "shoes/air-jordan-5-v-retro-fire-red-da1911-102-pair.jpg", id: "52915" , brand:"Jordan", quantity:20 },
    { price: 13000, name: "Air Jordan 9 chile red", image: "shoes/air-jordan-9-retro-chile-red-ct8019-600-pair.jpg", id: "52766" , brand:"Jordan", quantity:20 },
    { price: 14000, name: "Air Jordan 8 aqua", image: "shoes/aqua-air-jordan-8-black-friday-31.jpg", id: "53047", brand:"Jordan", quantity:20 },
    { price: 90000, name: "Eminem x Carhartt Jordan 4", image: "shoes/eminem carhartt jordan 4.jpg", id: "52778", brand:"Jordan", quantity:20 },
    { price: 25000, name: "Air Jordan 1 Chicago", image: "shoes/jordan 1 chicago.jpg", id: "52889", brand:"Jordan", quantity:20 },
    { price: 22000, name: "Air Jordan 3 black cement", image: "shoes/jordan-3-black-cement-official-images-2.jpg", id: "529410", brand:"Jordan", quantity:20 },
    { price: 9000, name: "Nike KD 6", image: "shoes/kd 6.jpg", id: "5282111", brand:"Nike", quantity:20 },
    { price: 8000, name: "Nike KD 7", image: "shoes/KD7.jpg", id: "527712", brand:"Nike", quantity:20 },
    { price: 20000, name: "Nike Kobe 8 elite", image: "shoes/kobe 8 elite.jpg", id: "530413", brand:"Nike", quantity:20 },
    { price: 8000, name: "Adidas Ultraboost 3.0 triple white", image: "shoes/ultraboost 3.0 triple white.jpg", id: "530514", brand:"Addidas", quantity:20 },
    { price: 40000, name: "Nike Lebron X South Beach", image: "shoes/lebron x south beach.jpeg", id: "530415", brand:"Nike", quantity:20 },
    { price: 25000, name: "Air Jordan 7 Lola Bunny", image: "shoes/lola-bunny-jordan-7-shoes-2.jpg", id: "529516", brand:"Jordan", quantity:20 },
    { price: 11000, name: "Nike Air Max 97 Air Sprung", image: "shoes/nike-air-max-97-airSprung.jpg", id: "528117", brand:"Nike", quantity:20 },
    { price: 55000, name: "Nike Air Max 97 Sean Weatherspoon", image: "shoes/nike-air-max-197-sean-wotherspoon-release-date.jpg", id: "5294418", brand:"Nike", quantity:20 },
    { price: 25000, name: "Nike Kobe 10", image: "shoes/nike-kobe-10-white-black-01.jpg", id: "5304319", brand:"Nike", quantity:20 },
    { price: 12000, name: "Puma MB1 Rick and Morty", image: "shoes/rick-and-morty-puma-mb-01-pair.jpg", id: "5280220", brand:"Puma", quantity:20 },
    { price: 50000, name: "Air Jordan 1 Travis Scott", image: "shoes/Travis-Scott-Air-Jordan-1-High-OG-CD4487-100-Release-Date-Price.jpg", id: "5291821", brand:"Jordan", quantity:20 },
    { price: 35000, name: "Air Jordan 6 Travis Scott", image: "shoes/travis-scott-air-jordan-6-vi-retro-cn1084-200-pair.jpg", id: "5276422", brand:"Jordan", quantity:20 },
    { price: 40000, name: "Yeezy 700 Waverunner", image: "shoes/yeezy-700-waverunner-store-list-1.jpg", id: "5304123", brand:"Adidas", quantity:20 },
    { price: 11000, name: "Adidas Ultraboost 1.0 Triple White", image: "shoes/ultraboost 1.0 triple white.jpg", id: "527724",brand:"Adidas", quantity:100 },
    { price: 22000, name: "Air Jordan 11 Space Jam", image: "shoes/space-jam-11s-release-date-information-01.jpg", id: "5288725", brand:"Jordan", quantity:20 },
    { price: 8000, name: "Nike sb dunk low chlorophyll", image: "shoes/nike-sb-dunk-low-chlorophyll-bq6817-011-pair.jpg", id: "5294626", brand:"Nike", quantity:100 },
    { price: 8500, name: "Nike sb dunk low Thunder blue cool", image: "shoes/Nike-SB-Dunk-Low-Thunder-BlueCool-Grey-White-1.jpg", id: "5282127", brand:"Nike", quantity:100 },
    { price: 100000, name: "Nike Mags", image: "shoes/Nike-Mag-2016-Official-06_square_1600.jpg", id: "5277728",  brand:"Nike", quantity:2},
    { price: 9000, name: "Nike Lebron 11 diffused jade", image: "shoes/nike-lebron-11-diffused-jade.jpg", id: "5304829", brand:"Nike", quantity:100 },
    
]

//let cart = []

//================================ADD To CARTS=======================================================


let name = ""
let Price = ""
let image = ""


//Add to Cart
async function addCart(val){
      db.collection('purchased').orderBy('name').get().then(purchased => {
                var valueArr = purchased.map(function(item){ return item.name });
                var isDuplicate = valueArr.some(function(item, idx){ 
                return valueArr.indexOf(item) != idx 
                });

                db.collection('purchased').add(objects[val])
                       
               
        })   
  }






  //==================================================================================================================
      //Load Nike
      async function nike(){
        let prodcontainer = document.getElementById('prodcontainer')
        let head = document.getElementById('head')
        head.innerText = "Nike" 
        prodcontainer.innerHTML = '';
        for (let o = 0; o < objects.length; o++) {
          if(objects[o].brand == "Nike"){
            console.log(objects[o].name)
            prodcontainer.innerHTML += `<div class="card mx-auto" style="width: 18rem;">
              <img src="${objects[o].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${objects[o].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${objects[o].brand}</li>
              <li class="list-group-item">₱ ${objects[o].price}</li>
            </ul>
        <div class="card-body">
          <button type='button' class='btn btn-light' onclick="addCart(${o})"><img src="pics/4.png" width=20 height=20></button>
          <button type='button' class='btn btn-info' data-bs-toggle='modal' data-bs-target='#myModal${o}' > <img src="pics/view.png" width=20 height=20> </button>     <div class='modal' id='myModal${o}'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-header' <h5 class='modal-title'>Item</h5> <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'> <span aria-hidden='false'></span> </button> </div> <div class='modal-body'> <img src ='${objects[o].image}' width=350px, height=300px> <p id='pname'>${objects[o].name}</p>   <p id='pprice'>₱${objects[o].price}</p>  </div><div class='modal-footer'> <button type='button' class='btn btn-primary' onclick="addCart(${o})" >Add To Cart</button> <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button> </div>  </div> </div> </div>
         </div>
      </div>`
        }else{
          console.log('not Nike')
        }
      }
      }
//======================================================================================================================
      //Jordans
      async function jordans(){
        let prodcontainer = document.getElementById('prodcontainer')
        let head = document.getElementById('head')
        head.innerText = "Jordans" 
        prodcontainer.innerHTML = '';
        for (let o = 0; o < objects.length; o++) {
          if(objects[o].brand == "Jordan"){
            console.log(objects[o].name)
            prodcontainer.innerHTML += `<div class="card mx-auto" style="width: 18rem;">
              <img src="${objects[o].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${objects[o].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${objects[o].brand}</li>
              <li class="list-group-item">₱ ${objects[o].price}</li>
            </ul>
        <div class="card-body">
          <button type='button' class='btn btn-light' onclick="addCart(${o})"><img src="pics/4.png" width=20 height=20></button>
          <button type='button' class='btn btn-info' data-bs-toggle='modal' data-bs-target='#myModal${o}' > <img src="pics/view.png" width=20 height=20> </button>     <div class='modal' id='myModal${o}'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-header' <h5 class='modal-title'>Item</h5> <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'> <span aria-hidden='false'></span> </button> </div> <div class='modal-body'> <img src ='${objects[o].image}' width=350px, height=300px> <p id='pname'>${objects[o].name}</p>   <p id='pprice'>₱${objects[o].price}</p>  </div><div class='modal-footer'> <button type='button' class='btn btn-primary' onclick="addCart(${o})" >Add To Cart</button> <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button> </div>  </div> </div> </div>
         </div>
      </div>`
        }else{
          console.log('not Js')
        }
      }
      }

//==========================================================================================================================
      //Adidas
      async function adidas(){
        let prodcontainer = document.getElementById('prodcontainer')
        let head = document.getElementById('head')
        head.innerText = "Adidas" 
        prodcontainer.innerHTML = '';
        for (let o = 0; o < objects.length; o++) {
          if(objects[o].brand == "Adidas"){
            console.log(objects[o].name)
            prodcontainer.innerHTML += `<div class="card mx-auto" style="width: 18rem;">
              <img src="${objects[o].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${objects[o].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${objects[o].brand}</li>
              <li class="list-group-item">₱ ${objects[o].price}</li>
            </ul>
        <div class="card-body">
          <button type='button' class='btn btn-light' onclick="addCart(${o})"><img src="pics/4.png" width=20 height=20></button>
          <button type='button' class='btn btn-info' data-bs-toggle='modal' data-bs-target='#myModal${o}' > <img src="pics/view.png" width=20 height=20> </button>     <div class='modal' id='myModal${o}'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-header' <h5 class='modal-title'>Item</h5> <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'> <span aria-hidden='false'></span> </button> </div> <div class='modal-body'> <img src ='${objects[o].image}' width=350px, height=300px> <p id='pname'>${objects[o].name}</p>   <p id='pprice'>₱${objects[o].price}</p>  </div><div class='modal-footer'> <button type='button' class='btn btn-primary' onclick="addCart(${o})" >Add To Cart</button> <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button> </div>  </div> </div> </div>
         </div>
      </div>`
        }else{
          console.log('not Adidas')
        }
      }
      }
//=======================================================================================================================
      //Puma
      async function puma(){
        let prodcontainer = document.getElementById('prodcontainer')
        let head = document.getElementById('head')
        head.innerText = "Puma" 
        prodcontainer.innerHTML = '';
        for (let o = 0; o < objects.length; o++) {
          if(objects[o].brand == "Puma"){
            console.log(objects[o].name)
            prodcontainer.innerHTML += `<div class="card mx-auto" style="width: 18rem;">
              <img src="${objects[o].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${objects[o].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${objects[o].brand}</li>
              <li class="list-group-item">₱ ${objects[o].price}</li>
            </ul>
        <div class="card-body">
          <button type='button' class='btn btn-light' onclick="addCart(${o})" ><img src="pics/4.png" width=20 height=20></button>
          <button type='button' class='btn btn-info' data-bs-toggle='modal' data-bs-target='#myModal${o}' > <img src="pics/view.png" width=20 height=20> </button>     <div class='modal' id='myModal${o}'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-header' <h5 class='modal-title'>Item</h5> <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'> <span aria-hidden='false'></span> </button> </div> <div class='modal-body'> <img src ='${objects[o].image}' width=350px, height=300px> <p id='pname'>${objects[o].name}</p>   <p id='pprice'>₱${objects[o].price}</p>  </div><div class='modal-footer'> <button type='button' class='btn btn-primary' onclick="addCart(${o})" >Add To Cart</button> <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button> </div>  </div> </div> </div>
         </div>
      </div>`
        }else{
          console.log('not Puma')
        }
      }
      }

