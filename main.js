let shop = document.getElementById('shop')

let shopItemsData = [{
    id:"aswd1",
    name:"Casual Shirt",
    price: 45,
    desc: "lorem7  ",
    img: "images/img-1.jpg"
}, 
{
    id:"aswd2",
    name:"Office Shirt",
    price: 100,
    desc: "lorem7  ",
    img: "images/img-2.jpg"   
}, 
{
    id:"aswd3",
    name:"T Shirt",
    price: 25,
    desc: "lorem7  ",
    img: "images/img-3.jpg"
}, 
{
    id:"aswd4",
    name:"Man Shirt",
    price: 300,
    desc: "lorem7  ",
    img: "images/img-4.jpg"
},
];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((aswd5)=>{
        return `
        <div class="item">
        <img width="220" src="images/img-1.jpg" alt="">
        <div class="details">
            <h3>Casual Shirt</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="price-quantity">
                <h2>$ 45</h2>
                <div class="buttons">
                    <i class="bi bi-dash"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus"></i>
                </div>
            </div>
        </div>
    </div>   `;
    }).join("")) ;
};

generateShop()
