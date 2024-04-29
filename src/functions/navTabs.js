$(document).ready(() => {

    tabFunctionality();
    loadSplideImages();
    splideNavigate();
    sideButtonHover();
    tabClick();


    $('.location-btn-gotomaps').mouseover(function () {
        $(this).find('i').css('color', '#fff')
    }).mouseout(function () {
        $(this).find('i').css('color', '#2F72A9')
    })

})

const loadSplideImages = () => {

    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        height: '70vh',
        width: '100%'
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: '10vw',
        fixedHeight: 'auto',
        width: '42%',
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}

function loadAmenitiesImages() {

    var main = new Splide('#amenities-main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        height: '50vh',
        width: '100%'
    });

    var thumbnails = new Splide('#amenities-thumbnail-carousel', {
        fixedWidth: '10vw',
        fixedHeight: 'auto',
        width: '42%',
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}

const splideNavigate = () => {
    $('.carousel-img').click(function () {
        setTimeout(() => {
            $('.tab-overview-img-main').attr('src', $(this).attr('src'))
        }, 700);
    })
}

const sideButtonHover = () => {
    $('.overview-side-button').mouseover(function () {
        const sideButtonLabel = $(this).find('span')
        $(sideButtonLabel).css('display', 'inline-block')
        $(this).css('width', 'fit-content')
    }).mouseout(function () {
        const sideButtonLabel = $(this).find('span')
        $(sideButtonLabel).css('display', 'none')
    })
}

const tabFunctionality = () => {

    $('.nav-tab-buttons').find('span').remove()
    $('.nav-tab-buttons').find('i').show()

    const activeTab = $('.nav-tab-buttons.active')
    const activeTabIcon = $(activeTab).find('i')

    activeTabIcon.hide();

    const toAppend = `<span>${$(activeTab).attr('aria-info')}</span>`

    $(activeTab).append(toAppend)
}

const tabClick = () => {

    $('.nav-tab-buttons').click(function () {

        tabFunctionality()

        $('.target-bottom-tabs').removeClass('show').removeClass('active')

        const targetBottomTab = $(this).attr('aria-bottom')

        $(targetBottomTab).addClass('show').addClass('active')

        const clickedFunctionName = $(this).attr('aria-function')

        console.log(clickedFunctionName)

        if (clickedFunctionName && window[clickedFunctionName]) {
            window[clickedFunctionName]();

        }

    })

}