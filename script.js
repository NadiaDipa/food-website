// document.getElementById('see-more-btn').addEventListener('click', function() {

//     const cardContainer = document.getElementById('cardContainer')
//     for (let i = 0; i < 6; i++){
//         const item = document.createElement('div');
//         item.classList.add('item-one');

//         item.innerHTML = `
        
//          <div class="item-one-img">
//                                 <img src="./images/popular-item/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__10__Chicken-Pot-Pie-LEAD-1-f01cc53ba4dc4b50b91de3aa1e2ef62c 1.png" alt="">
//                             </div>
        
//                             <div class="item-bottom-section">
//                                 <div class="popular-item-left-side">
//                                     <div class="popular-item-left-side-title">
//                                         <h3>Chicken Pot Pie</h3>
//                                         <button>Add to Cart</button>
//                                     </div>
        
//                                 </div>
        
//                                 <div class="popular-item-icon-side">
//                                     <div class="star-icon">
//                                         <i class="fa fa-star"></i>
//                                         <p>4.9</p>
//                                     </div>
        
//                                     <div class="price-value">
//                                         <p>$25.00</p>
//                                     </div>
        
//                                 </div>
//                             </div>
        
        
//         `

//         cardContainer.appendChild(item);
//     }
// });








// Sample data for new products
const newProducts = [
    {
        url: './images/popular-item/image1.jpg',
        title: 'Beef Flank Steak & Rice',
        rating: 4.5,
        price: '$59.99'
    },
    {
        url: './images/popular-item/image2.jpg',
        title: 'Thai Cuisine',
        rating: 4.7,
        price: '$24.99'
    },
    {
        url: './images/popular-item/image3.jpg',
        title: 'Cobb Salad',
        rating: 4.6,
        price: '$42.99'
    },
    {
        url: './images/popular-item/image4.jpg',
        title: 'Noodles',
        rating: 4.7,
        price: '$22.00'
    },
    {
        url: './images/popular-item/image5.jpg',
        title: 'Shawarma',
        rating: 4.6,
        price: '$22.99'
    },
    {
        url: './images/popular-item/image6.jpg',
        title: 'Multi Cuisine',
        rating: 4.6,
        price: '$32.99'
    }
];




function handleShowMoreProject() {
    const cardContainer = document.getElementById('card-all-items');

    for (const item of newProducts) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('item-one');

        cardDiv.innerHTML = `
            <div class="item-one-img">
                <img src="${item.url}" alt="${item.title}">
            </div>
            <div class="item-bottom-section">
                <div class="popular-item-left-side">
                    <div class="popular-item-left-side-title">
                        <h3>${item.title}</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div class="popular-item-icon-side">
                    <div class="star-icon">
                        <i class="fa fa-star"></i>
                        <p>${item.rating}</p>
                    </div>
                    <div class="price-value">
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(cardDiv);
    }
}








// function handleShowMoreProject() {
//     const cardContainer = document.getElementById('card-all-items');

//     for (const item of newProducts) {
//         const cardDivImage = document.createElement('div');
//         cardDivImage.classList.add('card-all-items');
//         cardDivImage.innerHTML = `
//             <img src="${item.url}" alt="${item.title}">
//         `;
//         cardContainer.appendChild(cardDivImage);
//     }
// }


// Function to create product item elements
