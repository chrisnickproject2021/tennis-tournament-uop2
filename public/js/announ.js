let allAnn = document.getElementById("all-ann");
let newAnn = document.getElementById("new-article");

newAnn.addEventListener("click",function(){
    let newArt = document.createElement("article");
    allAnn.prepend(newArt);

    let newA = document.createElement("a");
    newArt.appendChild(newA);
    newA.setAttribute("href", "#");
    let newImag = document.createElement("img");
    newA.appendChild(newImag);
    newImag.setAttribute("src","img/nikhths.jpg")

    let newA2 = document.createElement("a");
    newArt.appendChild(newA2);
    newA2.setAttribute("href", "#");
    newA2.setAttribute("class", "readmore2");
    newA2.innerText = "Read more";

    let newH1 = document.createElement("h1");
    newArt.appendChild(newH1);
    newH1.innerText = "Read more";

    let newP = document.createElement("p");
    newArt.appendChild(newP);
    newP.innerText = "Published date: 03/05/2021";

    let newA3 = document.createElement("a");
    newArt.appendChild(newA3);
    newA3.setAttribute("href", "#");
    newA3.setAttribute("class", "readmore");
    newA3.innerText = "Read more";
})