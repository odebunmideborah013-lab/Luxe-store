function addToCart(productName, price) {
    alert(productName + " has been added to your cart!");
}

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price, image) {

    const product = {
        name: productName,
        price: price,
        image: image
    };

    cart.push(product);

    localStorage.setItem("cart",
        JSON.stringify(cart));

    alert(productName + " has been added to your cart!");
}


function displayCart() {

    const cartItems =
        document.getElementById("cart-items")
        ;
    const carTotal =
        document.getElementById("cart-total")
        ;

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function (product) {

        const item =
            document.createElement("div");
        item.className = "cart-item";

        const image =
            document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        item.appendChild(image);

        const productText =
            document.createElement("p");

        productText.textContent =
            product.name + " - NGN" +
            product.price.toLocaleString();

        item.appendChild(productText);

        const removeButton =
            document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.onclick = function () {
            cart = cart.filter(function (item) {
                return item.name !== product.name;
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            displayCart();
        };

        item.appendChild(removeButton);

        cartItems.appendChild(item);

        total = total + product.price;
    });

    carTotal.textContent = "Total:NGN" + total.toLocaleString();
}

displayCart();

const productData = {

    shirt: {
        name: "Classic Shirt",
        price: 36000,
        image: "images/shirt.jpg",
        relatedImages: [
            "images/IMANI GRID.jpg",
            "images/imani shirt.png",
            "images/imani_polo.png",
            "images/narashirt.jpg"
        ]
    },

    top: {
        name: "Stylish Top",
        price: 15000,
        image: "images/stylish.jpg",
        relatedImages: [
            "images/top1.jpg",
            "images/top2.png",
            "images/top3.png",
            "images/top4.png"
        ]
    },

    bag: {
        name: "Classic Bag",
        price: 26000,
        image: "images/bags.jpg",
        relatedImages: [
            "images/bag1.jpg",
            "images/bag2.jpg",
            "images/bag3.jpg",
            "images/bag4.jpg"
        ]
    },

    // dress: {
    //     name: "Freya dress",
    //     price: 30000,
    //     image: "images/dresses.jpg",
    //     relatedImages: [
    //         "images/dress2.jpg",
    //         "images/dress1.jpg",
    //         "images/elegant dress.jpg",
    //         "images/dress3.jpg"
    //     ]
    // },

    shoes: {
        name: "Elegant Heels",
        price: 18000,
        image: "/images/heel3.jpg",
        relatedImages: [
            "images/heel1.jpg",
            "images/heel2.jpg",
            "images/heel4.jpg",
            "images/heel5.jpg"
        ]
    },

    trousers: {
        name: "Classic Trousers",
        price: 22000,
        image: "/images/pants.webp",
        relatedImages: [
            "images/pants1.jpg",
            "images/pants2.jpg",
            "images/pants3.jpg",
            "images/pants4.jpg"
        ]
    },

    blackdress: {
        name: "JOKE PEEP DRESS - BLACK",
        price: 38000,
        image: "/images/jokeblack.png",
        relatedImages: [
            "images/maxi1.jpg",
            "images/lucy3.jpg",
            "images/maxi2.jpg",
            "images/dress3.jpg"
        ]
    },

    accesories: {
        name: "Fashion Accessories",
        price: 10000,
        image: "images/accessory.jpg",
        relatedImages: [
            "images/accesory1.webp",
            "images/accesory2.jpg",
            "images/accesory3.jpg",
            "images/accesory4.jpg"
        ]
    },

    Freyadress: {
        name: "Freya dress",
        price: 30000,
        image: "images/dresses.jpg",
        relatedImages: [
            "images/dress2.jpg",
            "images/dress1.jpg",
            "images/elegant dress.jpg",
            "images/dress3.jpg"
        ]
    },

    Carnivaldress: {
        name: "Carnival dress",
        price: 20000,
        image: "images/carnival.jpg",
        relatedImages: [
            "images/lucy2.jpg",
            "images/dress1.jpg",
            "images/lucy1.jpg",
            "images/dress3.jpg"
        ]
    },

    Eveningdress: {
        name: "Evening dress",
        price: 60000,
        image: "images/dress.jpg",
        relatedImages: [
            "images/maxi4.jpg",
            "images/lucy2.jpg",
            "images/maxi5.jpg",
            "images/maxi2.jpg"
        ]
    },

    Whitedress: {
        name: "ALBA ZUKI SKIRT SET - WHITE",
        price: 60000,
        image: "images/alba_white.jpg",
        relatedImages: [
            "images/zuki1.jpg",
            "images/zuki2.jpg",
            "images/zuki3.jpg",
            "images/zuki4.jpg"
        ]
    },

    Knotdress: {
        name: "NOLANI KNOT DRESS - PINK",
        price: 60000,
        image: "images/nolanimeshdresspink.png",
        relatedImages: [
            "images/knot1.jpg",
            "images/knot3.jpg",
            "images/knot2.jpg",
            "images/knot4.jpg",
        ]
    },
    // shirt

    "imani-grid": {
        name: "Imani Grid",
        price: 56000,
        image: "images/IMANI GRID.jpg",
        relatedImages: []
    },


    "imani-shirt": {
        name: "Imani Shirt",
        price: 68000,
        image: "images/imani shirt.png",
        relatedImages: []
    },

    "imani-polo": {
        name: "Imani Polo",
        price: 45000,
        image: "images/imani_polo.png",
        relatedImages: []
    },

    "nara-shirt": {
        name: "Nara Shirt",
        price: 69000,
        image: "images/narashirt.jpg",
        relatedImages: []
    },

    // bags

    "blue-bag": {
        name: "Classic Blue Bag",
        price: 52000,
        image: "images/bag1.jpg",
        relatedImages: []
    },

    "mini-bag": {
        name: "Classic Mini Bag",
        price: 34000,
        image: "images/bag2.jpg",
        relatedImages: []
    },

    "tote-bag": {
        name: "Classic Tote Bag",
        price: 45000,
        image: "images/bag3.jpg",
        relatedImages: []
    },

    "luxury-bag": {
        name: "Luxury Classic Bag",
        price: 56000,
        image: "images/bag4.jpg",
        relatedImages: []
    },

    // tops
    "free-top": {
        name: "Free Top",
        price: 23000,
        image: "images/top1.jpg",
        relatedImages: []
    },

    "sleeveless-top": {
        name: "Sleeveless Top",
        price: 45000,
        image: "images/top2.png",
        relatedImages: []
    },

    "ankara-top": {
        name: "Ankara Top",
        price: 56000,
        image: "images/top3.png",
        relatedImages: []
    },

    "serene-top": {
        name: "Serene Top",
        price: 54000,
        image: "images/top4.png",
        relatedImages: []
    },

    // shoes

    "elegant-heel": {
        name: "Elegant Heel",
        price: 50000,
        image: "images/heel1.jpg",
        relatedImages: []
    },

    "gold-heel": {
        name: "Gold Heel",
        price: 78000,
        image: "images/heel2.jpg",
        relatedImages: []
    },

    "style-heel": {
        name: "Academic Style Heel",
        price: 56000,
        image: "images/heel4.jpg",
        relatedImages: []
    },

    "summer-heel": {
        name: "Summer Heel",
        price: 67000,
        image: "images/heel5.jpg",
        relatedImages: []
    },

    // pants
    "belted-pant": {
        name: "Belted Slouchy Trouser Pants in Plaid",
        price: 45000,
        image: "images/pants1.jpg",
        relatedImages: []
    },

    "pleated-pant": {
        name: "Pleated Relaxed Straight Pants",
        price: 65000,
        image: "images/pants2.jpg",
        relatedImages: []
    },

    "olive-pant": {
        name: "Olive Windsor Trouser",
        price: 78000,
        image: "images/pants3.jpg",
        relatedImages: []
    },

    "cantabili-pant": {
        name: "Cantabili Pant",
        price: 45000,
        image: "images/pants4.jpg",
        relatedImages: []
    },


    // black dress
    "cape-dress": {
        name: "Maxi Cape Dress",
        price: 78000,
        image: "images/maxi1.jpg",
        relatedImages: []
    },

    "gisele-dress": {
        name: "GISELE MAXI MESH DRESS- OLIVE",
        price: 50000,
        image: "images/lucy3.jpg",
        relatedImages: []
    },

    "neck-dress": {
        name: "Chifon Alter Neck Dress",
        price: 65000,
        image: "images/maxi2.jpg",
        relatedImages: []
    },

    "ivy-dress": {
        name: "Ivy Feathered Dress- Blue",
        price: 56000,
        image: "images/dress3.jpg",
        relatedImages: []
    },

    // accessories
    "fashion-ring": {
        name: "Fashion Rings",
        price: 76000,
        image: "images/accesory1.webp",
        relatedImages: []
    },

    "fashion-necklace": {
        name: "Fashion Necklace",
        price: 45000,
        image: "images/accesory2.jpg",
        relatedImages: []
    },

    "fashion-bracelet": {
        name: "Fashion Bracelet",
        price: 45000,
        image: "images/accesory3.jpg",
        relatedImages: []
    },

    "hair-accesory": {
        name: "Hair Accesory",
        price: 25000,
        image: "images/accesory4.jpg",
        relatedImages: []
    },

    // freyadress
    "kaia-dress": {
        name: "KAIA LINEN DRESS",
        price: 60000,
        image: "images/dress2.jpg",
        relatedImages: []
    },

    "croatia-dress": {
        name: "CROATIA DRESS - BLUE",
        price: 76000,
        image: "images/dress1.jpg",
        relatedImages: []
    },

    "elegant-dress": {
        name: "Elegant Dress",
        price: 45000,
        image: "images/elegant dress.jpg",
        relatedImages: []
    },

    "ivy-dress": {
        name: "Ivy Feathered Dress- Blue",
        price: 60000,
        image: "images/dress3.jpg",
        relatedImages: []
    },

    // carnival dress
    "lucy-dress": {
        name: "LUCY MESH DRESS-RED",
        price: 45000,
        image: "images/lucy2.jpg",
        relatedImages: []
    },

    "mesh-dress": {
        name: "Ivy Feathered Dress- Blue",
        price: 50000,
        image: "images/lucy1.jpg",
        relatedImages: []
    },

    // evening dress
    "neckline-dress": {
        name: "Neckline Layered Dress",
        price: 67000,
        image: "images/maxi4.jpg",
        relatedImages: []
    },

    "red-dress": {
        name: "MESH DRESS-RED",
        price: 89000,
        image: "images/maxi5.jpg",
        relatedImages: []
    },

    "mash-dress": {
        name: "MASH FILLED DRESS",
        price: 54000,
        image: "images/maxi2.jpg",
        relatedImages: []
    },

    // white dreess
    "zuki-dress": {
        name: "ALBA ZUKI SKIRT SET - EMERALD GREEN",
        price: 65000,
        image: "images/zuki1.jpg",
        relatedImages: []
    },

    "alicante-dress": {
        name: "ALICANTE DRESS - PINK",
        price: 54000,
        image: "images/zuki2.jpg",
        relatedImages: []
    },

    "lola-dress": {
        name: "LOLA SIGNATURE PANT SET - GREEN",
        price: 72000,
        image: "images/zuki3.jpg",
        relatedImages: []
    },

    "alba-dress": {
        name: "ALBA ZUKI PRINTED SKIRT SET- COPPER",
        price: 64000,
        image: "images/zuki4.jpg",
        relatedImages: []
    },

    // knot dress
    "knot-dress": {
        name: "NOLANI KNOT DRESS - BLUE",
        price: 56000,
        image: "images/knot1.jpg",
        relatedImages: []
    },

    "jane-dress": {
        name: "EMELIA JANE KAFTAN - FUCHSIA PINK",
        price: 58000,
        image: "images/knot3.jpg",
        relatedImages: []
    },

    "blue-dress": {
        name: "NOLANI KNOT DRESS - NAVY BLUE",
        price: 65000,
        image: "images/knot2.jpg",
        relatedImages: []
    },

    "blush-dress": {
        name: "EMELIA JANE KAFTAN - BLUSH PINK",
        price: 45000,
        image: "images/knot4.jpg",
        relatedImages: []
    },
};
const params = new
    URLSearchParams(window.location.search);
const productKey =
    params.get("product") || "";
const selectedProduct =
    productData[productKey];

const productImage =
    document.getElementById("product-image");
const productName =
    document.getElementById("product-name");
const productPrice =
    document.getElementById("product-price");

if (selectedProduct && productImage && productName && productPrice) {
    productImage.src =
        selectedProduct.image;
    productImage.alt =
        selectedProduct.name;
    productName.textContent =
        selectedProduct.name;
    productPrice.textContent = "NGN"
        +
        selectedProduct.price.toLocaleString();
}

const addProductButton =
    document.getElementById("add-product-btn");

if (addProductButton &&
    selectedProduct) {
    addProductButton.onclick =
        function () {
            addToCart(
                selectedProduct.name,
                selectedProduct.price,
                selectedProduct.image
            );
        };
}


const relatedContainer =
    document.getElementById("related-container");

const relatedSection =
    document.getElementById("related-products-section");

if (
    relatedSection && (!selectedProduct.relatedImages ||
        selectedProduct.relatedImages.length === 0
    )
) {
    relatedSection.style.display = "none";
}
// if (relatedContainer && selectedProduct) {

//     relatedContainer.innerHTML= "";

const relatedDetails = {
    bag: [
        {
            key: "blue-bag",
            name: "Blue Classic Bag",
            price: 52000
        },
        {
            key: "mini-bag",
            name: "Classic Mini Bag",
            price: 34000
        },
        {
            key: "tote-bag",
            name: "Classic Tote Bag",
            price: 45000
        },
        {
            key: "luxury-bag",
            name: "Luxury Classic Bag",
            price: 56000
        }
    ],

    shirt: [
        {
            name: "Imani Grid",
            price: 56000
        },
        {
            name: " Imani Shirt",
            price: 68000
        },
        {
            name: "Imani Polo",
            price: 45000
        },
        {
            name: "Nara Shirt",
            price: 69000
        }
    ],

    top: [
        {
            key: "free-top",
            name: "Free Top",
            price: 23000
        },
        {
            key: "sleeveless-top",
            name: "Sleeveless Top",
            price: 45000
        },
        {
            key: "ankara-top",
            name: "Ankara Top",
            price: 56000
        },
        {
            key: "serene-top",
            name: "Serene Top",
            price: 54000
        }
    ],

    shoes: [
        {
            key: "elegant-heel",
            name: "Elegant Heel",
            price: 50000
        },
        {
            key: "gold-heel",
            name: "Gold Heel",
            price: 78000
        },
        {
            key: "style-heel",
            name: "Academic Style Heel",
            price: 56000
        },
        {
            key: "summer-heel",
            name: "Summer Heel",
            price: 67000
        }
    ],

    trousers: [
        {
            key: "belted-pant",
            name: "Belted Slouchy Trouser Pants in Plaid",
            price: 45000
        },
        {
            key: "pleated-pant",
            name: "Pleated Relaxed Straight Pants",
            price: 65000
        },
        {
            key: "olive-pant",
            name: "Olive Windsor Trouser",
            price: 78000
        },
        {
            key: "cantabili-pant",
            name: "Cantabili Pants",
            price: 45000
        }
    ],

    accesories: [
        {
            key: "fashion-ring",
            name: "Fashion Rings",
            price: 76000
        },
        {
            key: "fashion-necklace",
            name: "Fashion Necklace",
            price: 45000
        },
        {
            key: "fashion-bracelet",
            name: "Fashion Bracelet",
            price: 45000
        },
        {
            key: "hair-accesory",
            name: "Hair Accesory",
            price: 25000
        }
    ],

    Freyadress: [
        {
            key: "kaia-dress",
            name: "KAIA LINEN DRESS",
            price: 60000
        },
        {
            key: "croatia-dress",
            name: "CROATIA DRESS - BLUE",
            price: 76000
        },
        {
            key: "elegant-dress",
            name: "Elegant Dress",
            price: 45000
        },
        {
            key: "ivy-dress",
            name: "Ivy Feathered Dress - Blue",
            price: 56000
        }
    ],

    Carnivaldress: [
        {
            key: "lucy-dress",
            name: "LUCY MESH DRESS - RED",
            price: 45000
        },
        {
            key: "croatia-dress",
            name: "CROATIA DRESS - BLUE",
            price: 76000
        },
        {
            key: "mesh-dress",
            name: "LUCY MESH DRESS - BLACK",
            price: 65000
        },
        {
            key: "ivy-dress",
            name: "Ivy Feathered Dress - Blue",
            price: 56000
        }
    ],

    blackdress: [
        {
            key: "cape-dress",
            name: "Maxi Cape dress",
            price: 78000
        },
        {
            key: "gisele-dress",
            name: "GISELE MAXI MESH DRESS- OLIVE",
            price: 50000
        },
        {
            key: "neck-dress",
            name: "Chifon Alter Neck Dress",
            price: 65000
        },
        {
            key: "ivy-dress",
            name: "Ivy Feathered Dress - Blue",
            price: 56000
        }
    ],

    Eveningdress: [
        {
            key: "neckline-dress",
            name: "Neckline layered dress",
            price: 67000
        },
        {
            key: "lucy-dress",
            name: "LUCY MESH DRESS - RED",
            price: 45000
        },
        {
            key: "red-dress",
            name: "MESH DRESS- RED",
            price: 89000
        },
        {
            key: "mash-dress",
            name: "MASH FILLED DRESS",
            price: 54000
        }
    ],

    Whitedress: [
        {
            key: "zuki-dress",
            name: "ALBA ZUKI SKIRT SET - EMERALD GREEN",
            price: 65000
        },
        {
            key: "alicante-dress",
            name: "ALICANTE DRESS - PINK",
            price: 54000
        },
        {
            key: "lola-dress",
            name: "LOLA SIGNATURE PANT SET - GREEN",
            price: 72000
        },
        {
            key: "alba-dress",
            name: "ALBA ZUKI PRINTED SKIRT SET- COPPER",
            price: 64000
        }
    ],

    Knotdress: [
        {
            key: "knot-dress",
            name: "NOLANI KNOT DRESS - BLUE",
            price: 56000
        },
        {
            key: "jane-dress",
            name: "EMELIA JANE KAFTAN - FUCHSIA PINK",
            price: 58000
        },
        {
            key: "blue-dress",
            name: "NOLANI KNOT DRESS - NAVY BLUE",
            price: 65000
        },
        {
            key: "blush-dress",
            name: "EMELIA JANE KAFTAN - BLUSH PINK",
            price: 45000
        }
    ]
};
selectedProduct.relatedImages.forEach(function (image, index) {

    const details = productKey === "shirt"
        ? [
            {
                key: "imani-grid",
                name: "Imani Grid",
                price: 56000
            },
            {
                key: "imani-shirt",
                name: " Imani Shirt",
                price: 68000
            },
            {
                key: "imani-polo",
                name: "Imani Polo",
                price: 45000
            },
            {
                key: "nara-shirt",
                name: "Nara Shirt",
                price: 69000
            }

        ][index] : relatedDetails[productKey][index];

    const card =
        document.createElement("div");
    card.className = "related-card";

    card.innerHTML = `
             <img src= "${image}"  alt= "$
         {details.name}">
                <h3>${details.name}</h3>
                <p>NGN
                ${details.price.toLocaleString()}</p>
            `;
    card.style.cursor = "pointer";

    card.onclick = function () {
        window.location.href = "product.html?product=" + details.key;
    };

    relatedContainer.appendChild(card);
});

// complete the look
const completeLookContainer = document.getElementById("complete-look-container");
const completeLookSection = document.querySelector(".complete-look");

if (
    completeLookSection && selectedProduct && selectedProduct.relatedImages && 
    selectedProduct.relatedImages.length > 0
) {
    completeLookSection.style.display = "none";
}

if (completeLookContainer && completeLookSection) {
    let lookProducts = [];

    if (productKey === "kaia-dress" ||
        productKey === "croatia-dress" ||
        productKey === "elegant-dress" ||
        productKey === "ivy-dress" ||
        productKey === "cape-dress" ||
        productKey === "gisele-dress" ||
        productKey === "neck-dress" ||
        productKey === "lucy-dress" ||
        productKey === "mesh-dress" ||
        productKey === "neckline-dress" ||
        productKey === "mash-dress" ||
        productKey === "red-dress" ||
        productKey === "zuki-dress" ||
        productKey === "alicante-dress" ||
        productKey === "lola-dress" ||
        productKey === "alba-dress" ||
        productKey === "knot-dress" ||
        productKey === "jane-dress" ||
        productKey === "blue-dress" ||
        productKey === "blush-dress" ||
        productKey === "fashion-ring" ||
        productKey === "fashion-bracelet" ||
        productKey === "fashion-necklace" ||
        productKey === "hair-accesory" 
        //  productKey === "elegant-heel" ||
        //   productKey === "gold-heel" ||
        //    productKey === "style-heel" ||
        //     productKey === "summer-heel" 

    ) {
        lookProducts = ["shoes", "accesories", "bag"];

    } else if (
        productKey === "top" ||
        productKey.includes("top")
    ) {
        lookProducts = ["trousers", "bag", "shoes"];

    } else if (
        productKey === "shirt" ||
        productKey.includes("shirt") ||
        productKey.includes("grid") ||
        productKey.includes("polo")
    ) {
        lookProducts = ["trousers", "bag", "shoes"];

    } else if (
        productKey === "bag" ||
        productKey.includes("bag")
    ) {
        lookProducts = ["Freyadress", "shoes", "accesories"];

    } else if (productKey === "shoes" ||
        productKey.includes("shoes")
    ) {
        lookProducts = ["Freyadress", "top", "accesories"];

    } else if (productKey === "trousers" ||
          productKey === "belted-pant" ||
        productKey === "pleated-pant" ||
        productKey === "olive-pant" ||
         productKey === "cantabili-pant" 
    ) {
        lookProducts = ["top", "shirt", "bag"];

    } else if (productKey === "accesories" ||
         productKey === "elegant-heel" ||
          productKey === "gold-heel" ||
           productKey === "style-heel" ||
            productKey === "summer-heel" 
    ) {
        lookProducts = ["Freyadress", "accesories", "bag"];

    } else if (productKey === "cape-dress") {
        lookProducts = ["Freyadress", "accesories", "bag"];
    } else if (productKey === "blackdress") {
        lookProducts = ["Freyadress", "accesories", "bag"];
    }

    completeLookContainer.innerHTML = "";

    lookProducts.forEach(function (key) {

        const product = productData[key];

        if (!product) {
            return;
        }

        const card = document.createElement("div");
        card.className = "look-card";

        card.innerHTML = `
        <img src ="${product.image}" 
        alt= "${product.name}">
                        <h3>${product.name}</h3>
                        <p>NGN ${product.price.toLocaleString()}</p>`;

        card.style.cursor = "pointer";

        card.onclick = function () {
            window.location.href = "product.html?product=" + key;
        };

        completeLookContainer.appendChild(card);
    });
}


// check-out form

function placeholder(event) {
    event.preventDefault();

    alert("Your order has been placed successfully");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}

// email section
function subscribe(event) {
    event.preventDefault();

    const email =
        document.getElementById("newsletter-email").value;

    alert("Thank you for subscribing");

    document.getElementById(newsletter - email).value = "";
}

// categories
function filterProducts(category) {
    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {
        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "";

        } else {
            product.style.display =
                "none";
        }
    });
}
