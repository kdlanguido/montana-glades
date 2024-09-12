<div class="tab-pane fade p-0 m-0 position-relative" id="tabAmenities" role="tabpanel">
    <section>
        <?php
        include "src/components/widgetButtons/widgetButtons.php"
        ?>

        <button class="overview-side-buttons btn position-absolute end-0 z-3 btnSidebuttonFullscreen d-none" id="btnSidebuttonFullscreenAmenities">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707" />
            </svg>
            <span class="ms-2">Fullscreen</span>
        </button>

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