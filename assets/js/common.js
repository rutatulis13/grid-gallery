let page = 1;
let isLoading = {loading: true};

const imageLoader = () => {
fetch('https://picsum.photos/v2/list?page=' + page + '&limit=10/')
.then((response) => response.json())
.then(jsonObjektas => {
    console.log(jsonObjektas)
    jsonObjektas.forEach((val, key) => {
    document.querySelector(".grid").innerHTML += `<div class="overlay"><div class="grid-item"><img src="${val.download_url}" /></div></div>`
    })
    isLoading.loading = false;
})
}
imageLoader();

document.querySelector(".loadmore").addEventListener("click", () => {
    setTimeout(remove, 3000)
      }
    )

      function remove() {
        page++;
        imageLoader();
      }

window.addEventListener("scroll", () => {
    let btnPos = document.querySelector(".buttonHolder").offsetTop;
    console.log(btnPos);
    if(window.scrollY >= btnPos && !isLoading.loading) {
        page++;
        imageLoader()
    }
})
    
    





