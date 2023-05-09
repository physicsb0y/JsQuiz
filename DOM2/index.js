// const productAdd = document.querySelector("button");

// productAdd.addEventListener("click", () => {
//     console.log("Button Clicked!");
//     // productAdd.setAttribute("style", "display: none")
// })

// const products = document.querySelectorAll("li");

// products.forEach(product => {
//     product.addEventListener("click", (event) => {
//         event.target.style.textDecoration = "line-through";
//         console.log(event.target.textContent);
//     })
// });

//============================================================================================

// const products = document.querySelectorAll("li");

// products.forEach(product => {
//     product.addEventListener("click", (event) => {
//         event.target.remove();
//         console.log(event.target.textContent);
//     })
// });


// // const addProduct = document.querySelector("ul");
// // const button = document.querySelector("button");
// // button.addEventListener("click", () => {
// //     addProduct.innerHTML = "<li>New Product</li>" + addProduct.innerHTML;
// //     console.log(addProduct.innerHTML);
// // });


// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     const newLi = document.createElement("li");
//     newLi.innerText = "New Product";
//     addProduct.append(newLi);
//     console.log(addProduct.innerHTML);
// }); 
//=======================================================================


// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = "New Product";
//     addProduct.append(li);
// });

// addProduct.addEventListener("click", (event) => {
//     if(event.target.tagName === "LI"){
//         event.target.remove();
//     }
// })

//======================================================================


// const products = document.querySelector("ul");
// const copyAlert = (event) => {
//     if(event.target.tagName === "LI"){
//         alert( event.target.textContent)
//     }
// }

// products.addEventListener("copy", copyAlert)
//===========================================================

// const webPage = document.querySelector("body");
// webPage.addEventListener("mousemove", (event) => {
//     console.log(event)
// })


const webPage = document.querySelector("body");
webPage.addEventListener("wheel", (event) => {
    console.log(event);
})