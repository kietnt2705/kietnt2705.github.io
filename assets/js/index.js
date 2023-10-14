var image = document.querySelector(".slide");
var imageList = [];
var index = 0;
var soHinh = 3;

var textContentList = [
    { heading: "Chicago", description: "Thank you, Chicago - A night we won't forget." },
    { heading: "Los Angeles", description: "We had the best time playing at Venice Beach!" },
    { heading: "New York", description: "The atmosphere in New York is lorem ipsum." }
];

var getHeading = document.querySelector('.text-heading'); // Sử dụng querySelector thay vì getElementsByClassName
var getDescription = document.querySelector('.text-description'); // Sử dụng querySelector thay vì getElementsByClassName

function updateTextContent(index) {
    getHeading.textContent = textContentList[index].heading;
    getDescription.textContent = textContentList[index].description;
}

for (var i = 0; i < soHinh; i++) {
    imageList[i] = new Image();
    imageList[i].src = "/assets/img/img" + (i + 1) + ".jpg";
}

function changeImage() {
    index++;

    if (index >= soHinh) {
        index = 0;
    }

    image.style.background = 'url("' + imageList[index].src + '") top center/ cover no-repeat';
    
    updateTextContent(index);
    setTimeout(changeImage, 2000);
}

changeImage();
