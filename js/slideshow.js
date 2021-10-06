const slideshow = {
    index: 0,
    images: [
        { title: 'view', caption: 'wow', file: 'assets/257803292.jpg' },
        { title: 'view', caption: 'woow', file: 'assets/533438155.jpg' },
        { title: 'view', caption: 'woooow', file: 'assets/867186_v2.webp' },
    ]
}


// function goToIndex(index) {
//     slideshow.index = index;

//     insertImages();
// }

// function previousImage() {
//    if (slideshow.index === 0) {
//        slideshow.index = slideshow.images.length - 1;
//    } else {
//        slideshow.index = slideshow.index - 1;
//    }
// }

// function nextImage() {
//    if (slideshow.index === slideshow.images.length - 1) {
//        slideshow.index = 0;
//    } else {
//        slideshow.index = slideshow.index + 1;
//    }

//    insertImages();
// }


// function setupControls() {
//     const buttons = document.querySelectorAll('.slideshow-controls button');

//     function onButtonClick(event) {

//     }

//     [ ... buttons ].forEach(button => {
//         if (button.className === 'controls-prev') {
//         button.addEventListener('click', onButtonClick);
//     }

//     if (button.className === 'controls-prev') {
//         button.addEventListener('click', onButtonClick);
//     } 

//     })     
// }



function insertImages() {
    // 1. query .slideshow-slides
    // 2. for each img in slideshow .images
    // 3. create, insert element

    const container = document.querySelector('.slideshow-slides');

    slideshow.images.forEach((image, imageIndex) => {
        const figureElement = document.createElement('figure');
        const figcaptionElement = document.createElement('figcaption');
        const imgElement = document.createElement('img');

        imgElement.src = image.file;
        imgElement.alt = image.caption;

        figcaptionElement.innerText = image.caption;

        if (imageIndex === slideshow.index) {
            figureElement.className = 'is-visible';
        }

        figureElement.appendChild(imgElement)
        figureElement.appendChild(figcaptionElement)

        container.appendChild(figureElement)
    })
}

function insertDots() {
    const container = document.querySelector('.slideshow-dots');

    slideshow.images.forEach((image, index) => {
        button.arialabel = "go to image "
    })
}

insertImages();
insertDots();
// setupControls();
