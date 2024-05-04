
fullscreenOverviewRendered = false;
fullscreenAmenitiesRendered = false;

const renderFullscreenSplide = () => {
    const renderedFullScreen = new Splide('#fullscreen-main-carousel', {
        cover: true,
        height: '100vh',
        width: '100vw',
        pagination: false
    }).mount();
}

function renderFullscreenImages() {

    if (!fullscreenOverviewRendered && activeTabLabel == 'Overview') {
        getFullscreenImages().then(() => {
            renderFullscreenSplide();
        }).then(() => {
            fullscreenOverviewRendered = true;
        })
    }

    if (!fullscreenAmenitiesRendered && activeTabLabel == 'Amenities') {
        getFullscreenImages().then(() => {
            renderFullscreenSplide();
        }).then(() => {
            fullscreenAmenitiesRendered = true;
        })
    }
}

const getFullscreenImages = () => {
    var output = '';
    var imageCollection = [];

    return new Promise((resolve) => {

        setTimeout(() => {

            if (activeTabLabel == 'Overview') {
                imageCollection = assetsListOverview
            } else {
                imageCollection = assetsListAmenities
            }

            imageCollection.map((image) => {
                output += `
                    <li class="splide__slide me-1" style="opacity:1; object-fit:contain; width:100vw;">
                        <img src="${image[0]}" alt="${image[1]}" >
                    </li>
                `
            })

            $('#fullscreen-main-carousel-splide').empty().html(output)

            resolve(true);
        }, 500);
    })
}