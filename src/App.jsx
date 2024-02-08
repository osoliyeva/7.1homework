import './App.css'

function App() {
  const displayImg = document.querySelector(".display > img")
  const images = document.querySelectorAll(".img__slider > .img-item ")
  const nextImage= document.querySelector(".next")
  const prevImage= document.querySelector(".prev")

images.forEach(image => {
    image.addEventListener('click', (e) => {
        displayImg.src = e.target.src;
    });
});

nextImage.addEventListener("click", () => {
    let view = false;
    images.forEach((image, key) => {
        if (image.src == displayImg.src && !view) {
            if (images.length - 1 !== key) { 
                displayImg.src = images[key + 1].src;
            } else {
                displayImg.src = images[0].src;
            };
            view = true;
        }
    })
});
prevImage.addEventListener("click", () => {
    let view = false;
    images.forEach((image, key) => {
        if (image.src == displayImg.src && !view) {
            if (0!== key) { 
                displayImg.src = images[key - 1].src;
            } else {
                displayImg.src = images[images.length -1].src;
            };
            view = true;
        }
    })
});
  
  return (
    <>
      
      <main class="container border">
        <div class=" display border select-none">
            <div class="icon__box">
                <div class="next__and__prev prev" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
                </div>  
                <div class="next__and__prev next " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                </div>
            </div>
          <img class="img__item" src="https://wp-s.ru/wallpapers/3/13/468461865377659/the-cat-on-the-grass-shows-his-tongue.jpg" alt="single img"/>  
        </div>
        <div class="img__slider">
            <img class="img-item" src="https://wp-s.ru/wallpapers/3/13/468461865377659/the-cat-on-the-grass-shows-his-tongue.jpg" alt=""/>
            <img class="img-item" src="https://w.forfun.com/fetch/92/9259772e51ba1843b2a178615339fc51.jpeg" alt=""/>
            <img class="img-item" src="https://wallpapers.com/images/hd/orange-fat-beautiful-cat-in-road-fecjpppwed5imewh.jpg" alt=""/>
            <img class="img-item" src="https://img.goodfon.com/original/2048x1356/5/1f/kotyary-koty-leto-fon.jpg" alt=""/>
            <img class="img-item" src="https://img.goodfon.com/original/1920x1408/e/bb/ryzhiy-kot-kot-ryzhiy-pushistyy.jpg" alt=""/>
            <img class="img-item" src="https://w.forfun.com/fetch/b0/b0c1455423885ff32ff45ee569997447.jpeg" alt=""/>
            <img class="img-item" src="https://i.pinimg.com/originals/a2/bc/ec/a2bcec1e3cf09220180ff2a104d353fc.jpg" alt=""/>
            <img class="img-item" src="https://wallpapersgood.ru/wallpapers/main/201546/4fa845fdbe0a54c.jpg" alt=""/>
            <img class="img-item" src="https://i.pinimg.com/originals/42/b2/66/42b26657babb33e9b8c39d557a99c03e.jpg" alt=""/>
            <img class="img-item" src="https://1mhvqt3xoj4u2otrxo1recge-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/funniest-cat-ever.jpg" alt=""/>
            <img class="img-item" src="https://wallbox.ru/resize/1600x900/wallpapers/main/201140/koshak-udivlenie-yazyk-333c992.jpg" alt=""/>
            <img class="img-item" src="https://i.pinimg.com/originals/a7/ef/23/a7ef23d98d3cee0852db66089cc400c7.jpg" alt=""/>
            <img class="img-item" src="https://s.hdnux.com/photos/07/23/23/1914076/5/1200x0.jpg" alt=""/>
            <img class="img-item" src="https://wp-s.ru/wallpapers/6/0/431461178895807/the-kitten-yawns-funny-lying-down.jpg" alt=""/>
            <img class="img-item" src="https://avatars.mds.yandex.net/get-znatoki/1540166/2a0000018777f70b914814352fc2c5da139e/orig" alt=""/>
            <img class="img-item" src="https://murkote.com/wp-content/uploads/2016/05/11-smeshnoj-kot.jpg" alt=""/>
        </div>
    </main>
      
    </>
  )
}

export default App
