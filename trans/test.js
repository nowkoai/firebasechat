const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
const input = document.getElementById("input");

button.addEventListener("click", async function(){
    const word = input.value;
    const res = await fetch(`https://script.google.com/macros/s/AKfycbw9zQVG2vM4jLcOnGk4uaJ89s8-hMoXSPTC5EACNH3uls6P0v8/exec?text=${word}&sorce=en&target=ja`);
    const translates = await res.json();
    console.log(translates.text);
    const list = document.createElement("li");
    list.innerText = translates.text;
    lists.appendChild(list);

});
