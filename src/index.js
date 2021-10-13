// // --------- Dariana's

// Assign an initialization function to a variable that loads our needed info, displays on page
// -- could just as easily put inside the listener instead
const init = () => {
    fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(data => displayRamens(data)) // call the function that iterates, grabs the image
    // #3 create a new ramen from the form submit (not a post! it won't persist in refresh)
    // put form submit event listener in this function to make sure it's called correctly
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', (e) => {
        // prevent auto refresh
        e.preventDefault()
        // create a new object
        const ramenObj = {}
        // create the elements of the object
        ramenObj.name = document.getElementById('new-name').value;
        ramenObj.restaurant = document.getElementById('new-restaurant').value;
        ramenObj.image = document.getElementById('new-image').value;
        ramenObj.rating = document.getElementById('new-rating').value;
        ramenObj.comment = document.getElementById('new-comment').value;
        // add the object to the page
        displayRamen(ramenObj)
        // reset form inputs after submit (not actually part of ask)
        form.reset()
    })
}

// #1 + #2 displays ramen(s)
function displayRamen(ramen) {
    // where we will insert the created elements
    const ramenMenu = document.getElementById('ramen-menu');
    const image = document.createElement('img');
    image.src = ramen.image;

    // #2 display ramen details when the specific image is clicked
    image.addEventListener('click', () => {
        document.querySelector('.detail-image').src = ramen.image;
        document.querySelector('.name').innerHTML = ramen.name; //no difference in this instance w/innerText
        document.querySelector('.restaurant').innerHTML = ramen.restaurant;
        document.querySelector('#rating-display').innerHTML = ramen.rating;
        document.querySelector('#comment-display').innerHTML = ramen.comment;
    })
    // add image to the #ramen-menu div element
    ramenMenu.appendChild(image);
}

// #1 calls displayRamen, uses to insert ramen image for each iteration *** includes second deliverable
function displayRamens(ramens) {
    // create img element, insert the src attribute, append to the menu
    ramens.forEach(ramens => displayRamen(ramens))
}

// after DOMContentLoaded, call the initialization function using its assigned variable, which cascades into deiverables
document.addEventListener('DOMContentLoaded', init)






// // -------- My work -----------

// document.addEventListener('DOMContentLoaded', function () {
//     displayRamen()
// })

// // #1 display ramen images - it works!
// function displayRamen() {
//     fetch('http://localhost:3000/ramens')
//         .then(resp => resp.json())
//         .then(json => {
//             const ramenDisplays = document.getElementById('ramen-menu');
//             json.forEach(element => {
//                 const img = document.createElement('img');
//                 img.src = element.image;
//                 ramenDisplays.appendChild(img);
//             })
//         })
// }

// // ---------

// // #2 click ramen image to display details - it works!
// function showDetails(event) {
//     let display = document.getElementById('ramen-detail');
//     // console.log(event.target.src)
//     let picture = event.target.src.toString(); //image's source url
//     let source = picture.substring(21)
//     // console.log(source)
//     fetch('http://localhost:3000/ramens')
//         .then(resp => resp.json())
//         .then(json => {
//             json.forEach(element => {
//                 if (element.image.substring(1) === source) {
//                     // console.log(element.image.substring(1));
//                     let img = document.querySelector('img.detail-image');
//                     img.src = element.image;

//                     let name = document.querySelector('h2.name');
//                     name.innerText = element.name;

//                     let rest = document.querySelector('h3.restaurant');
//                     rest.innerText = element.restaurant;

//                     let rate = document.querySelector('#rating-display');
//                     rate.innerText = element.rating;

//                     let comment = document.querySelector('#comment-display');
//                     comment.innerText = element.comment;
//                 }
//             })
//         })
//     }
// // --------

// // #3 create new ramen after submitting 'new-ramen' form






// // ----------- Brendan's response -------------

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:3000/ramens')
//         .then(resp => resp.json())
//         .then(json => json.forEach(renderMenu))
//         const newRamenForm = document.querySelector('#new-ramen');
//         newRamenForm.addEventListener('submit', (event) => {
//             event.preventDefault();
//             const newRamenName = document.querySelector('#new-name').value;
//             const newRamenRestaurant = document.querySelector('#new-restaurant').value;
//             const newRamenImage = document.querySelector('#new-image').value;
//             const newRamenRating = document.querySelector('#new-rating').value;
//             const newRamenComment = document.querySelector('#new-comment').value;
//             const newRamenItem = {};
//             newRamenItem.name = newRamenName;
//             newRamenItem.restaurant = newRamenRestaurant;
//             newRamenItem.image = newRamenImage;
//             newRamenItem.rating = newRamenRating;
//             newRamenItem.comment = newRamenComment;
//             renderMenu(newRamenItem);
//         })
// })

// function renderMenu(ramenItem) {
//     const menuContainer = document.querySelector('#ramen-menu');
//     const menuItem = document.createElement('img');
//     menuItem.src = ramenItem.image;
//     menuContainer.append(menuItem);
//     menuItem.addEventListener('click', () => {
//         const detailContainer = document.querySelector('#ramen-detail');
//         const detailImg = detailContainer.querySelector('img');
//         const detailName = detailContainer.querySelector('h2');
//         const detailRestaurant = detailContainer.querySelector('h3');
//         const ratingText = document.querySelector('#rating-display');
//         const commentText = document.querySelector('#comment-display');
//         detailImg.src = ramenItem.image;
//         detailImg.alt = ramenItem.name;
//         detailName.textContent = ramenItem.name;
//         detailRestaurant.textContent = ramenItem.restaurant;
//         ratingText.textContent = ramenItem.rating;
//         commentText.textContent = ramenItem.comment;
//     })
// }
