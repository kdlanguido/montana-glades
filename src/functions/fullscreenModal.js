fullscreenOverviewRendered = false;
fullscreenAmenitiesRendered = false;

// const renderFullscreenSplide = () => {
//   if (fullscreenSplideInstance) {
//     fullscreenSplideInstance.destroy();
//   }

//   fullscreenSplideInstance = new Splide("#fullscreen-main-carousel", {
//     cover: true,
//     height: "100vh",
//     width: "100vw",
//     pagination: false,
//     start: activeSlideshowIndex,
//   }).mount();

//   if (fullscreenSplideInstanceAmenities) {
//     fullscreenSplideInstanceAmenities.destroy();
//   }

//   console.log(activeSlideshowIndexAmenities);

//   fullscreenSplideInstanceAmenities = new Splide(
//     "#fullscreen-main-carousel-amenities",
//     {
//       cover: true,
//       height: "100vh",
//       width: "100vw",
//       pagination: false,
//       start: activeSlideshowIndexAmenities,
//     }
//   ).mount();
// };

const dismountFullscreenSplide = () => {
  if (fullscreenSplideInstance) {
    fullscreenSplideInstance.destroy();
    fullscreenSplideInstance = null;
  }
};

const renderFullscreenImages = () => {
  if (activeTabLabel === "Overview") {
    getFullscreenImages().then(() => {
      if (fullscreenSplideInstance) {
        fullscreenSplideInstance.destroy();
      }

      fullscreenSplideInstance = new Splide("#fullscreen-main-carousel", {
        cover: true,
        height: "100vh",
        width: "100vw",
        pagination: false,
        start: activeSlideshowIndex,
      }).mount();
    });
  } else {
    getFullscreenImages().then(() => {
      if (fullscreenSplideInstanceAmenities) {
        fullscreenSplideInstanceAmenities.destroy();
      }

      fullscreenSplideInstanceAmenities = new Splide(
        "#fullscreen-main-carousel-amenities",
        {
          cover: true,
          height: "100vh",
          width: "100vw",
          pagination: false,
          start: activeSlideshowIndexAmenities,
        }
      ).mount();
    });
  }
};

const preloadImages = (imageUrls) => {
  return new Promise((resolve) => {
    let loaded = 0;
    const total = imageUrls.length;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        loaded += 1;
        if (loaded === total) {
          resolve();
        }
      };
      img.src = url;
    });
  });
};

const getFullscreenImages = () => {
  var output = "";
  var imageCollection = [];

  return new Promise((resolve) => {
    setTimeout(() => {
      if (activeTabLabel === "Overview") {
        imageCollection = assetsListOverview;
      } else {
        imageCollection = assetsListAmenities;
      }

      const imageUrls = imageCollection.map((image) => image[0]);

      preloadImages(imageUrls).then(() => {
        imageCollection.forEach((image) => {
          output += `
              <li class="splide__slide me-1" style="opacity:1; object-fit:contain; width:100vw;">
                <img src="${image[0]}" crossorigin="anonymous" referrerpolicy="no-referrer" alt="${image[1]}">
              </li>
            `;
        });

        if (activeTabLabel === "Overview") {
          $("#fullscreen-main-carousel-splide").html(output);
        } else {
          $("#fullscreen-main-carousel-splide-amenities").html(output);
        }

        resolve();
      });
    }, 150);
  });
};
