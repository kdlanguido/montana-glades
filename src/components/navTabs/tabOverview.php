<div class="tab-pane fade show active p-0 m-0 position-relative" id="tabOverview" role="tabpanel">
    <section>
        <div class="tab-overview-logo position-absolute top-0 w-100 z-3">
            <img src="src/static/logo.webp" alt="">
        </div>

        <?php
        include "src/components/widgetButtons/widgetButtons.php"
        ?>

        <section class="splide w-100 p-0 m-0 border-0" id="main-carousel">
            <div class="splide__track">
                <ul class="splide__list" id="overview-main-carousel-splide"></ul>
            </div>
        </section>

        <div class="position-absolute bottom-0 w-100" id="image-carousel">
            <section class="splide px-5 py-2" id="thumbnail-carousel" aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel.">
                <div class="splide__track">
                    <ul class="splide__list" id="overview-thumbnail-carousel-splide"></ul>
                </div>
            </section>
        </div>
    </section>
</div>