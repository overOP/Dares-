const container = document.getElementById('container');
const lisItem = [
    {Image: "10/1.jpg"},
    {Image: "10/2.jpg"},
    {Image: "10/3.jpg"},
    {Image: "10/4.jpg"},
    {Image: "10/5.jpg"},
    {Image: "10/6.jpg"},
    {Image: "10/7.jpg"},
    {Image: "10/9.jpg"},
];

let currentIndex = 0;

const rebderEacheImage = (data) => {
const item = `
<div class="item px-8">
<img src="${data.Image}" alt="${currentIndex}">
<div>
<button id="prev" onclick="prevImage()"><</button>
<button id="next" onclick="nextImage()">></button>
</div>
</div>
`
container.innerHTML = item;
};
const nextImage = () => {
    currentIndex++;
    if(currentIndex === lisItem.length){
        currentIndex = 0;
    }
    rebderEacheImage(lisItem[currentIndex]);
};
const prevImage = () => {
    clearInterval(intervalId);
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = lisItem.length - 1;
    }
    rebderEacheImage(lisItem[currentIndex]);
};

rebderEacheImage(lisItem[currentIndex]);

const intervalId = setInterval(() => {
    nextImage();
}, 3000);