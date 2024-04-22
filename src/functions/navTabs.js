$(document).ready(() => {

    tabFunctionality();
    loadSplideImages();
    splideNavigate();
    sideButtonHover();
    tabClick();

})

const loadSplideImages = async () => {
    await new Splide('.splide', {
        fixedWidth: 160,
        fixedHeight: 120,
        width: '500px',
        gap: 8,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
    }).mount();
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

        $('.target-bottom-tabs').hide()
        const targetBottomTab = $('.nav-tab-buttons').attr('data-bs-target-bottom')
        $(targetBottomTab).show()
    })

}