<div class="nav-tabs">

    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverview.php";
        include "src/components/navTabs/tabLocation.php";
        include "src/components/navTabs/tabAmenities.php";
        include "src/components/navTabs/tabPlans.php";
        ?>
    </div>

    <ul class="nav nav-pills px-2 w-100">
        <li class="nav-item">
            <button data-bs-target="#tabOverview" class="nav-tab-buttons nav-link mx-1 active" aria-information="Overview" aria-bottom="#tabOverviewBottom" data-bs-toggle="tab" type="button" role="tab">
                <img src="src/static/home_icon.svg" alt="home icon" height="20" width="20" />
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabLocation" class="nav-tab-buttons nav-link mx-1" aria-information="Location" aria-bottom="#tabLocationBottom" data-bs-toggle="tab" type="button" role="tab">
                <img src="src/static/location_icon.svg" alt="location icon" height="20" width="20" />
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabAmenities" class="nav-tab-buttons nav-link mx-1" aria-information="Amenities" aria-function="renderOverviewAmenities" aria-bottom="#tabAmenitiesBottom" data-bs-toggle="tab" type="button" role="tab">
                <img src="src/static/amenities_icon.svg" alt="amenities icon" height="30" width="30" />
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabPlans" class="nav-tab-buttons nav-link mx-1" aria-information="Site Plan" aria-bottom="#tabPlansBottom" data-bs-toggle="tab" type="button" role="tab">
                <img src="src/static/plans_icon.svg" alt="plans icon" height="30" width="25" />
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons no-tab nav-link nav-item-pops mx-1" data-bs-toggle="modal" data-bs-target="#modal-construction-updates">
                <img src="src/static/construction_icon.svg" alt="construction icon" height="30" width="30" />
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons no-tab nav-link nav-item-pops mx-1">
                <img src="src/static/share_icon.svg" alt="share icon" height="20" width="20" />
            </button>
        </li>
    </ul>


    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverviewBottom.php";
        include "src/components/navTabs/tabLocationBottom.php";
        include "src/components/navTabs/tabAmenitiesBottom.php";
        include "src/components/navTabs/tabPlansBottom.php";
        ?>
    </div>




</div>