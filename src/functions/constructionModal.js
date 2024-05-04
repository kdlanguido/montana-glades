const constructionUpdatesAssets = [
    ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714802978/construction/pexels-pixabay-534220_ggl3mt.webp', 'Construction updates 1'],
    ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714802976/construction/pexels-quang-nguyen-vinh-222549-2138126_oqathl.webp', 'Construction updates 2'],
];

constructionUpdatesRendered = false;


const renderConstructionSplide = () => {
    new Splide('#construction-main-carousel', {
        cover: true,
        heightRatio: 1,
    }).mount();
}

function renderConstructionImages() {

    if (!constructionUpdatesRendered) {

        getConstructionUpdatesImages().then(() => {
            renderConstructionSplide();
        }).then(() => {
            constructionUpdatesRendered = true;
        })
    }
}

const getConstructionUpdatesImages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            var output = '';

            constructionUpdatesAssets.map((image) => {
                output += `
                    <li class="splide__slide me-1" style="opacity:1">
                        <img src="${image[0]}" alt="${image[1]}" >
                    </li>
                `
            })

            $('#construction-main-carousel-splide').html(output)

            resolve(true);
        }, 500);
    })
}