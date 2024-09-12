const assetsListOverview = [
  ["src/static/overview/Photo3.webp", "Photo 3"],
  ["src/static/overview/Photo4.webp", "Photo 4"],
  ["src/static/overview/Photo5.webp", "Photo 5"],
  ["src/static/overview/Photo6.webp", "Photo 6"],
  ["src/static/overview/Photo1.webp", "Photo 1"],
  ["src/static/overview/Photo2.webp", "Photo 2"],
];

const assetsListAmenities = [
  [
    "src/static/amenities/Swimming_Pool_Lifestyle_1_bsltfn_t5leta.webp",
    "Swimming pool",
  ],
  [
    "src/static/amenities/Meditation_Lifestyle_yjbvdl_nfs6to_dfl2mo.webp",
    "MG Clubhouse",
  ],
  [
    "src/static/amenities/Basketball_Playing_t0xfix_cpqkjs_iaxebr.webp",
    "MG Clubhouse",
  ],
  [
    "src/static/amenities/Biking_Lifestyle_biqwwh_ue4omf_adrvyc.webp",
    "MG Clubhouse",
  ],
  [
    "src/static/amenities/Yoga_Nature_Lifestyle_fxnpsp_bwcul7_xi1y4c.webp",
    "MG Clubhouse",
  ],
  [
    "src/static/amenities/Playground_Slide_with_Kid_zp9hin_andaui_jz5hna.webp",
    "MG Clubhouse",
  ],
  [
    "src/static/amenities/Jogging_Lifestyle_fxlire_vtqlbb_da21g2.webp",
    "MG Clubhouse",
  ],
];

interValRef = 0;
interValRef = setInterval("checkState();", 100);

amenitiesRendered = false;
activeTabLabel = "Overview";

function checkState() {
  if (document.readyState == "complete") {
    renderPage();
    clearInterval(interValRef);
  }
}

$(document).ready(function () {
  renderAmenities();
  renderOverviewAssets();
  tabFunctionality();
  navLinksFunctionality();
  splideNavigate();
  sideButtonHover();
  tabClick();
  loadSplideImages();

  $(".location-btn-gotomaps")
    .mouseover(function () {
      $(this).find("i").css("color", "#fff");
    })
    .mouseout(function () {
      $(this).find("i").css("color", "#2F72A9");
    });

  $("#btnSidebuttonFullscreen").click(function () {
    $("#modal-fullscreen").modal("show");
    renderFullscreenImages();
  });

  $("#btnSidebuttonFullscreenAmenities").click(function () {
    $("#modal-fullscreen-amenities").modal("show");
    renderFullscreenImages();
  });

  $(".btn_prefix").click(function () {
    const prefix = $(this).attr("prefix");
    $("#btn_prefix").text(prefix);
  });
});

const renderPage = () => {
  $("#loading-page").hide();
  $("#main-content").show();
};

// function loadSplideImages() {
//   const main = new Splide("#main-carousel", {
//     type: "loop",
//     rewind: true,
//     autoplay: true,
//     interval: 3000,
//     arrows: true,
//     height: "80vh",
//     width: "100%",
//     start: 0,
//   });

//   const thumbnails = new Splide("#thumbnail-carousel", {
//     fixedWidth: "100px",
//     fixedHeight: "auto",
//     width: "80%",
//     gap: 10,
//     rewind: true,
//     pagination: false,
//     isNavigation: true,
//   });

//   main.sync(thumbnails);
//   main.mount();
//   thumbnails.mount();

// thumbnails.on("moved", function (newIndex, prevIndex, destIndex) {
//   activeSlideshowIndex = newIndex;
// });
// }

function loadSplideImages() {
  const main = new Splide("#main-carousel", {
    type: "fade",
    pagination: false,
    rewind: true,
    autoplay: true,
    interval: 3000,
    arrows: true,
    height: "80vh",
    width: "100%",
    start: 0,
  });

  const thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: "100px",
    fixedHeight: "auto",
    width: "80%",
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
  });

  main.sync(thumbnails).mount();

  thumbnails.mount().on("moved", function (newIndex, prevIndex, destIndex) {
    activeSlideshowIndex = newIndex;
  });
}

const splideNavigate = () => {
  $(".carousel-img").click(function () {
    setTimeout(() => {
      $(".tab-overview-img-main").attr("src", $(this).attr("src"));
    }, 700);
  });
};

const sideButtonHover = () => {
  $(".overview-side-button")
    .mouseover(function () {
      const sideButtonLabel = $(this).find("span");
      $(sideButtonLabel).css("display", "inline-block");
      $(this).css("width", "fit-content");
    })
    .mouseout(function () {
      const sideButtonLabel = $(this).find("span");
      $(sideButtonLabel).css("display", "none");
    });
};

const navLinksFunctionality = () => {
  $(".nav-link-button").click(function () {
    const tabId = $(this).attr("tab-id");

    if (!$(this).hasClass("no-tab")) {
      if (tabId == "tabBtnAmenities") {
        $("#btnSidebuttonFullscreenAmenities").removeClass("d-none");
        $("#btnSidebuttonFullscreen").addClass("d-none");
      }

      if (tabId == "tabBtnProject") {
        $("#btnSidebuttonFullscreenAmenities").addClass("d-none");
        $("#btnSidebuttonFullscreen").removeClass("d-none");
      }

      $(`#${tabId}`).trigger("click");
      $(".nav-link-button").removeClass("active");
      $(this).addClass("active");
    }
  });
};

const tabFunctionality = () => {
  $(".nav-tab-buttons").find("span").remove();
  $(".nav-tab-buttons").find("img").show();

  const activeTab = $(".nav-tab-buttons.active");
  const activeTabIcon = activeTab.find("img");
  $(".nav-link-button")
    .removeClass("active")
    .each((index, element) => {
      if ($(element).attr("tab-id") === activeTab.attr("id")) {
        $(element).addClass("active");
      }
    });

  activeTabIcon.hide();
  activeTabLabel = activeTab.attr("tab-information");

  const toAppend = `<span>${activeTabLabel}</span>`;

  $(activeTab).append(toAppend);
};

const tabClick = () => {
  $(".nav-tab-buttons").click(function () {
    const tabButton = $(this);

    if (!$(tabButton).hasClass("no-tab")) {
      tabFunctionality();

      $(".target-bottom-tabs").removeClass("show").removeClass("active");

      const targetBottomTab = $(tabButton).attr("tab-bottom");

      $(targetBottomTab).addClass("show").addClass("active");
    }

    const clickedFunctionName = $(tabButton).attr("tab-function");
    const tabId = $(tabButton).attr("tab-bottom");

    console.log(tabId);

    if (tabId == "#tabAmenitiesBottom") {
      $("#btnSidebuttonFullscreenAmenities").removeClass("d-none");
      $("#btnSidebuttonFullscreen").addClass("d-none");
    }

    if (tabId == "#tabOverviewBottom") {
      $("#btnSidebuttonFullscreenAmenities").addClass("d-none");
      $("#btnSidebuttonFullscreen").removeClass("d-none");
    }

    if (clickedFunctionName && window[clickedFunctionName]) {
      window[clickedFunctionName]();
    }
  });

  $(".nav-link-button").click(function () {
    const tabButton = $(this);

    if (!$(tabButton).hasClass("no-tab")) {
      tabFunctionality();

      $(".target-bottom-tabs").removeClass("show").removeClass("active");

      const targetBottomTab = $(tabButton).attr("tab-bottom");

      $(targetBottomTab).addClass("show").addClass("active");
    }

    const clickedFunctionName = $(tabButton).attr("tab-function");

    if (clickedFunctionName && window[clickedFunctionName]) {
      window[clickedFunctionName]();
    }
  });
};

const navClick = () => {};

const renderOverviewAssets = () => {
  var assets_output = "";
  assetsListOverview.map((image) => {
    assets_output += `
            <li class="splide__slide me-1">
                <img crossorigin="anonymous" referrerpolicy="no-referrer" class="carousel-img" src="${image[0]}" alt="${image[1]}">
            </li>
        `;
  });

  $("#overview-main-carousel-splide").html(assets_output);
  $("#overview-thumbnail-carousel-splide").html(assets_output);
};

const getAmenitiesImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var output = "";

      assetsListAmenities.map((image) => {
        output += `
                    <li class="splide__slide me-1">
                        <img crossorigin="anonymous" referrerpolicy="no-referrer" class="carousel-img" src="${image[0]}" alt="${image[1]}">
                    </li>
                `;
      });

      $("#amenities-main-carousel-splide").html(output);
      $("#amenities-thumbnail-carousel-splide").html(output);

      resolve(true);
    }, 500);
  });
};

function renderAmenities() {
  if (!amenitiesRendered) {
    $("#loading-page").show();
    $("#main-content").hide();

    getAmenitiesImages()
      .then(() => {
        loadAmenitiesImages();
      })
      .then(() => {
        setTimeout(() => {
          $("#loading-page").hide();
          $("#main-content").show();
          amenitiesRendered = true;
        }, 500);
      });
  }
}

function loadAmenitiesImages() {
  const main = new Splide("#amenities-main-carousel", {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 3000,
    pagination: false,
    arrows: false,
    height: "80vh",
    width: "100%",
  });

  const thumbnails = new Splide("#amenities-thumbnail-carousel", {
    fixedWidth: "100px",
    fixedHeight: "auto",
    width: "50%",
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  thumbnails.on("moved", function (newIndex, prevIndex, destIndex) {
    activeSlideshowIndexAmenities = newIndex;
  });
}
