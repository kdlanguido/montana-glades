<div class="tab-pane fade p-0 m-0 position-relative" id="tabAmenities" role="tabpanel">
    <section>
        <div class="tab-overview-logo position-absolute top-0 w-100 z-3" id="tab-amenities-logo">
            <img src="src/static/logo.webp" alt="">
        </div>

        <?php
        include "src/components/widgetButtons/widgetButtons.php"
        ?>

        <section class="splide w-100 p-0 m-0 border-0" id="amenities-main-carousel">
            <div class="splide__track">
                <ul class="splide__list" id="amenities-main-carousel-splide"></ul>
            </div>
        </section>

        <div class="position-absolute bottom-0 w-100" id="amenities-image-carousel">
            <section class="splide px-5 py-2" id="amenities-thumbnail-carousel" aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
                <div class="splide__track">
                    <ul class="splide__list" id="amenities-thumbnail-carousel-splide"></ul>
                </div>
            </section>
        </div>
    </section>
</div>