// const assetsListOverview = [
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694516/overview/MG_Clubhouse_Rendered_uohygj_arznuo_uirbkv.webp', 'MG Clubhouse'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694534/overview/MG_Clubhouse_Rendered_2_negxzv_b7wc0h_sb9324.webp', 'MG Clubhouse'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694567/overview/Exercising_Lifestyle_yqs5xb_ytl22y_zvgypb.webp', 'Exercising Lifestyle'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694456/overview/Biking_Happy_With_Road_zwmf14_kenvz1_imivmy.webp', 'Biking Happy With Road'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694603/overview/Village_Security_Entrance_vhpspo_owesbb_wm68hc.webp', 'Village is secured'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694638/overview/Family_Clapping_Main_Flier_wsdmyc_yfls4j_gwugvd.webp', 'Happy Family']
// ];

// const assetsListAmenities = [
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714693829/amenities/Swimming_Pool_Lifestyle_1_bsltfn_t5leta.webp', 'Swimming pool view'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714693910/amenities/Meditation_Lifestyle_yjbvdl_nfs6to_dfl2mo.webp', 'Meditate freely'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714693542/amenities/Basketball_Playing_t0xfix_cpqkjs_iaxebr.webp', 'Basketball court'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714693959/amenities/Biking_Lifestyle_biqwwh_ue4omf_adrvyc.webp', 'Biking freely'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714693999/amenities/Yoga_Nature_Lifestyle_fxnpsp_bwcul7_xi1y4c.webp', 'Yoga freely'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694182/amenities/Playground_Slide_with_Kid_zp9hin_andaui_jz5hna.webp', 'Playground slide with kid'],
//     ['https://res.cloudinary.com/dlobngrjy/image/upload/v1714694075/amenities/Jogging_Lifestyle_fxlire_vtqlbb_da21g2.webp', 'Jogging lifestyle'],
// ];


const assetsListOverview = [
    ['src/static/overview/MG_Clubhouse_Rendered_uohygj_arznuo_uirbkv.webp', 'MG Clubhouse'],
    ['src/static/overview/MG_Clubhouse_Rendered_2_negxzv_b7wc0h_sb9324.webp', 'MG Clubhouse'],
    ['src/static/overview/Exercising_Lifestyle_yqs5xb_ytl22y_zvgypb.webp', 'MG Clubhouse'],
    ['src/static/overview/Biking_Happy_With_Road_zwmf14_kenvz1_imivmy.webp', 'MG Clubhouse'],
    ['src/static/overview/Village_Security_Entrance_vhpspo_owesbb_wm68hc.webp', 'MG Clubhouse'],
    ['src/static/overview/Family_Clapping_Main_Flier_wsdmyc_yfls4j_gwugvd.webp', 'MG Clubhouse'],
];

const assetsListAmenities = [
    ['src/static/amenities/Swimming_Pool_Lifestyle_1_bsltfn_t5leta.webp', 'Swimming pool'],
    ['src/static/amenities/Meditation_Lifestyle_yjbvdl_nfs6to_dfl2mo.webp', 'MG Clubhouse'],
    ['src/static/amenities/Basketball_Playing_t0xfix_cpqkjs_iaxebr.webp', 'MG Clubhouse'],
    ['src/static/amenities/Biking_Lifestyle_biqwwh_ue4omf_adrvyc.webp', 'MG Clubhouse'],
    ['src/static/amenities/Yoga_Nature_Lifestyle_fxnpsp_bwcul7_xi1y4c.webp', 'MG Clubhouse'],
    ['src/static/amenities/Playground_Slide_with_Kid_zp9hin_andaui_jz5hna.webp', 'MG Clubhouse'],
    ['src/static/amenities/Jogging_Lifestyle_fxlire_vtqlbb_da21g2.webp', 'MG Clubhouse'],
];

interValRef = 0;
interValRef = setInterval("checkState();", 100)

amenitiesRendered = false;
activeTabLabel = 'Overview'

function checkState() {
    if (document.readyState == 'complete') {
        renderPage()
        clearInterval(interValRef);
    }
}

$(document).ready(function () {

    renderOverviewAssets()
    tabFunctionality();
    navLinksFunctionality();
    loadSplideImages();
    splideNavigate();
    sideButtonHover();
    tabClick();

    $('.location-btn-gotomaps').mouseover(function () {
        $(this).find('i').css('color', '#fff')
    }).mouseout(function () {
        $(this).find('i').css('color', '#2F72A9')
    })

    $('.btnSidebuttonFullscreen').click(function () {

        $('#modal-fullscreen').modal('show')

        renderFullscreenImages();
    })
})

const renderPage = () => {
    $('#loading-page').hide()
    $('#main-content').show()
}

const loadSplideImages = () => {

    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        height: '80vh',
        width: '100%'
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: '200px',
        fixedHeight: 'auto',
        width: '50%',
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

const navLinksFunctionality = () => {
    $('.nav-link-button').click(function () {
        const tabId = $(this).attr('tab-id')
        $(`#${tabId}`).trigger('click')
    })
}

const tabFunctionality = () => {

    $('.nav-tab-buttons').find('span').remove()
    $('.nav-tab-buttons').find('img').show()

    const activeTab = $('.nav-tab-buttons.active')
    const activeTabIcon = $(activeTab).find('img')

    activeTabIcon.hide();
    activeTabLabel = $(activeTab).attr('tab-information')

    const toAppend = `<span>${activeTabLabel}</span>`

    $(activeTab).append(toAppend)
}

const tabClick = () => {

    $('.nav-tab-buttons').click(function () {

        const tabButton = $(this)

        if (!$(tabButton).hasClass('no-tab')) {

            tabFunctionality()

            $('.target-bottom-tabs').removeClass('show').removeClass('active')

            const targetBottomTab = $(tabButton).attr('tab-bottom')

            $(targetBottomTab).addClass('show').addClass('active')
        }

        const clickedFunctionName = $(tabButton).attr('tab-function')

        if (clickedFunctionName && window[clickedFunctionName]) {
            window[clickedFunctionName]();
        }
    })

}

const renderOverviewAssets = () => {

    var output = '';

    assetsListOverview.map((image) => {
        output += `
            <li class="splide__slide me-1">
                <img crossorigin="anonymous" referrerpolicy="no-referrer" class="carousel-img" src="${image[0]}" alt="${image[1]}">
            </li>
        `
    })

    $('#overview-main-carousel-splide').html(output)
    $('#overview-thumbnail-carousel-splide').html(output)
}

const getAmenitiesImages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            var output = '';

            assetsListAmenities.map((image) => {
                output += `
                    <li class="splide__slide me-1">
                        <img crossorigin="anonymous" referrerpolicy="no-referrer" class="carousel-img" src="${image[0]}" alt="${image[1]}">
                    </li>
                `
            })

            $('#amenities-main-carousel-splide').html(output)
            $('#amenities-thumbnail-carousel-splide').html(output)

            resolve(true);
        }, 500);
    })
}

function renderAmenities() {

    if (!amenitiesRendered) {
        $('#loading-page').show()
        $('#main-content').hide()

        getAmenitiesImages().then(() => {
            loadAmenitiesImages();
        }).then(() => {
            setTimeout(() => {

                $('#loading-page').hide()
                $('#main-content').show()
                amenitiesRendered = true;

            }, 500);
        })
    }
}

function loadAmenitiesImages() {

    var main = new Splide('#amenities-main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        height: '80vh',
        width: '100%'
    });

    var thumbnails = new Splide('#amenities-thumbnail-carousel', {
        fixedWidth: '200px',
        fixedHeight: 'auto',
        width: '50%',
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}