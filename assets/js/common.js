let page = 1;
let isLoading = {loading: true};

const imageLoader = () => {
  let limit = 10;
  document.querySelector('.loader').style.display = 'block';
  
  fetch('https://picsum.photos/v2/list?page=' + page + '&limit=' + limit)
  .then((response) => response.json())
  .then(jsonObjektas => {

      //console.log(jsonObjektas)
      let loaded = 0;
      let grid = document.querySelector(".grid");
      jsonObjektas.forEach((val, key) => {
        let image = new Image();
        image.src = val.download_url;
        image.onload = async () => {
          let overlay = document.createElement('div');
          overlay.classList.add('overlay');
          grid.append(overlay);

          let gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');
          overlay.append(gridItem);

          gridItem.append(image);

          loaded++;
          if(loaded >= limit)
            document.querySelector('.loader').style.display = 'none';
        }
        //document.querySelector(".grid").innerHTML += `<div class="overlay"><div class="grid-item"><img src="${val.download_url}" /></div></div>`
      });

      isLoading.loading = false;
  })
}
imageLoader();


document.querySelector(".loadmore").addEventListener("click", () => {
  page++;
  imageLoader();
})

window.addEventListener("scroll", () => {
    let btnPos = document.querySelector(".buttonHolder").offsetTop;
    console.log(btnPos);
    if(window.scrollY >= btnPos && !isLoading.loading) {
        page++;
        imageLoader()
    }
})
    
    
    





