const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




const products = [
    {
        id: 1,
        image: 'img/PCs/PC-The Champion.jpeg',
        title: "The Champion",
        price: '$999.99',
        url: 'PC-The Champion.html'
    },
    {
        id: 2,
        image: 'img/PCs/PC-Neo Ninja.jpg',
        title: 'Neo Ninja',
        price: '$1299.99',
        url: 'PC-Neo Ninja.html'
    },
    {
        id: 3,
        image: 'img/PCs/PC-Morning Phantom.jpg',
        title: 'Morning Phantom',
        price: '$799.99',
        url: 'PC-Morning Phantom.html'
    },
    {
        id: 4,
        image: 'img/PCs/PC-Retro Revolver.jpeg',
        title: 'Retro Revolver',
        price: '$799.99',
        url: 'PC-Retro Revolver.html'
    },
    {
        id: 5,
        image: 'img/PCs/PC-Spectre.jpg',
        title: 'Spectre',
        price: '$1,199.99',
        url: 'PC-Spectre.html'
    },
    {
        id: 6,
        image: 'img/PCs/PC-Ascended.jpeg',
        title: 'Ascended',
        price: '$2599.99',
        url: 'PC-Ascended.html'
    },
    {
        id: 7,
        image: 'img/PCs/PC-Iron Knight.jpg',
        title: 'Iron Knight',
        price: '$1,499.99',
        url: 'PC-Iron Knight.html'
    },
    {
        id: 8,
        image: 'img/PCs/PC-Arcade Ocean.jpg',
        title: 'Arcade Ocean',
        price: '$899.99',
        url: 'PC-Arcade Ocean.html'
    },
    {
        id: 9,
        image: 'img/PCs/PC-Neon Mint.jpg',
        title: 'Neon Mint',
        price: '$1,699.99',
        url: 'PC-Neon Mint.html'
    },
    {
        id: 10,
        image: 'img/PCs/PC-Deadlock.jpeg',
        title: 'Deadlock',
        price: '$2299.99',
        url: 'PC-Deadlock.html'
    }
]

function searchProduct(products, searchQuery) {
    return products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(product => {
            return {
                product: product,
                url: product.url
            };
        });
}


const searchResult = searchProduct(products, "champion");
console.log(searchResult);



function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const matchingProducts = products.filter(product => {
        const productNameMatches = product.title.toLowerCase().includes(searchInput);
        const productPriceMatches = product.price.toLowerCase().includes(searchInput);
        return productNameMatches || productPriceMatches;
    });

    if (matchingProducts.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No matching products found.';
        resultsContainer.appendChild(noResultsItem);
    } else {
        matchingProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <a href="Prebuilds.html">
                    <span>${product.title}</span>
                </a>
                <span>${product.price}</span>
            `;
            resultsContainer.appendChild(listItem);
        });
    }
}

// Add click event handler to navigate to "Prebuilds.html"
document.getElementById('results').addEventListener('click', function (event) {
const clickedElement = event.target.closest('a');

// Check if the clicked element is an anchor tag
if (clickedElement) {
// Prevent the default behavior (following the link) to handle it manually
event.preventDefault();

// Now you can use window.location.href to navigate to "Prebuilds.html"
window.location.href = 'Prebuilds.html';
}
});



// Auto Slideshow
var counter = 3;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }
}, 5000);


//Suggestions, getting all required elements
const searchWrapper = document.querySelector(".search-bar");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; // user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ +'</li>';
        })
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectUserData = element.textcontent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
