let shop = document.getElementById('shop')



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData
        .map((aswd5)=>{
            let {id, name, price, desc, img} = aswd5;
            let search = basket.find((aswd5)=> aswd5.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h3>$ ${price}</h3>
                <div class="buttons">
                    <i onclick = "decrement(${id})" class="bi bi-dash"></i>
                    <div id = ${id} class="quantity">
                    ${search.item === undefined? 0: search.item}
                    </div>
                    <i onclick = "increment(${id})"class="bi bi-plus"></i>
                </div>
            </div>
        </div>
    </div>   `;
    }).join("")) ;
};

generateShop();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((aswd7)=> aswd7.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item +=1;
    }

    
    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((aswd7)=> aswd7.id === selectedItem.id);

    if(search === undefined){
        return;
    }

    else if(search.item === 0 ){
        return;
    }
    else{
        search.item -=1;
    }
    
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !==0);
    //console.log(basket);

    localStorage.setItem("data", JSON.stringify(basket));
};
 
let update = (id)=>{
    let search = basket.find((aswd7)=>aswd7.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item; 
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((aswd7)=>aswd7.item).reduce((x,y)=>x+y,0);

};

calculation();