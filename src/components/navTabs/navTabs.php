<div class="nav-tabs">

    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverview.php";
        include "src/components/navTabs/tabLocation.php";
        include "src/components/navTabs/tabAmenities.php";
        ?>
    </div>

    <ul class="nav nav-pills px-2 w-100">
        <li class="nav-item">
            <button data-bs-target="#tabOverview" class="nav-tab-buttons nav-link mx-1 active" aria-info="Overview" aria-bottom="#tabOverviewBottom" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-house-chimney"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabLocation" class="nav-tab-buttons nav-link mx-1" aria-info="Location" aria-bottom="#tabLocationBottom" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-map-location-dot"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabAmenities" class="nav-tab-buttons nav-link mx-1" aria-info="Amenities" aria-function="loadAmenitiesImages" aria-bottom="#tabAmenitiesBottom" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-faucet-drip"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabPlans" class="nav-tab-buttons nav-link mx-1" aria-info="Plans" aria-bottom="" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-swatchbook"></i>
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons nav-link nav-item-pops mx-1">
                <i class="fa-solid fa-compass-drafting"></i>
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons nav-link nav-item-pops mx-1">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
        </li>
    </ul>


    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverviewBottom.php";
        include "src/components/navTabs/tabLocationBottom.php";
        include "src/components/navTabs/tabAmenitiesBottom.php";
        ?>
    </div>




</div>