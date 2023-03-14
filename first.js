const save = document.querySelector("#saveName");
const del = document.querySelector("#removeName");
const val = document.querySelector("#name");

save.addEventListener("click", function(){
    const text = val.value;
    localStorage.setItem("valore", text)
});

del.addEventListener("click", function(){
    localStorage.clear();
})