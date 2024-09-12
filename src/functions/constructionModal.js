let activeSlideshowIndex = 0;
let activeSlideshowIndexAmenities = 0;
let fullscreenSplideInstance = null;
let fullscreenSplideInstanceAmenities = null;

const constructionUpdatesAssets = [
  ["src/static/construction/img3.webp", "Construction updates 3"],
  ["src/static/construction/img4.webp", "Construction updates 4"],
  ["src/static/construction/img5.webp", "Construction updates 5"],
  ["src/static/construction/img1.webp", "Construction updates 1"],
  ["src/static/construction/img2.webp", "Construction updates 2"],
];

constructionUpdatesRendered = false;

const renderConstructionSplide = () => {
  new Splide("#construction-main-carousel", {
    cover: true,
    height: "70vh",
  }).mount();
};

function renderConstructionImages() {
  if (!constructionUpdatesRendered) {
    getConstructionUpdatesImages()
      .then(() => {
        renderConstructionSplide();
      })
      .then(() => {
        constructionUpdatesRendered = true;
      });
  }
}

const getConstructionUpdatesImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var output = "";

      constructionUpdatesAssets.map((image) => {
        output += `
                    <li class="splide__slide me-1" style="opacity:1">
                        <img src="${image[0]}" crossorigin="anonymous" referrerpolicy="no-referrer" alt="${image[1]}" >
                    </li>
                `;
      });

      $("#construction-main-carousel-splide").html(output);

      resolve(true);
    }, 500);
  });
};
