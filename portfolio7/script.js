function selectRandomImages() {
    let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    let randomNumber = Math.floor(Math.random() * images.length);
    document.getElementById("image").src = images[randomNumber];
}




window.onload =
function loadInitialDatas(){
    document.getElementById("image").src = 'img1.jpg';
}
