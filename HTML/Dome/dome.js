// console.dir(document)
// const div = document.getElementsByClassName('parent')
// console.log(div)
// div[0].innerHTML = "<h1>Hello Java</h1>";
// const h1 = document.createElement("h1")
// h1.innerText = "Hello Python"


// h1.style.color = "red"
// h1.style.backgroundColor = "yellow"
// h1.style.width = "fit-content"

// div[0].appendChild(h1)
// console.log(h1)


// const img = document.createElement("img")
// console.log(img)
// img.src = "collegeimage.png"
// img.setAttribute("height","400px")

// div[0].appendChild(img)

// const button = document.getElementById("btn")
// function getData(){
//     console.log("Calling Getdata")
//     display.innerHTML = "<h2 style = color:green>Welcome to CSE</h2>"
// }
// const display = document.getElementById("disp")
// console.log(display)

// button.addEventListener("click",getData)



const promise1 = new Promise(
    (resolve, reject) => {
        let a = 12
        if (a > 10) {
            resolve("value of a is resolved")
        } else {
            reject("value of a is rejected")
        }
    }
);

promise1.then((msg) => { console.log(msg) })
    .catch(error => { console.log(error) })
    .finally(() => { console.log('All resources have being closed') })


const promise2 = new Promise(
    (resolve, reject) => {
        let ans = Math.random();
        if (ans > 100 && ans < 200) {
            resolve("value of a is resolved")
        } else {
            reject("value of a is rejected")
        }
    }
);

promise2.then((msg) => { console.log(msg) })
    .catch(error => { console.log(error) })
    .finally(() => { console.log('All resources have being closed') })


const response = fetch('https://dummyjson.com/products')
response.then(data => {
    console.log(data)
    data.json().then(res => {
        console.log(res.products[0].id + " " + res.products[0].title)

        div[0].append()    
    })
})