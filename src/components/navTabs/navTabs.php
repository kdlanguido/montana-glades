<div class="nav-tabs">

    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverview.php";
        ?>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
    </div>

    <ul class="nav nav-pills px-2">
        <li class="nav-item">
            <button data-bs-target="#tabOverview" class="nav-tab-buttons nav-link me-2 active" aria-info="Overview" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-house-chimney"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabLocation" class="nav-tab-buttons nav-link me-2" aria-info="Location" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-map-location-dot"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabAmenities" class="nav-tab-buttons nav-link me-2" aria-info="Amenities" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-faucet-drip"></i>
            </button>
        </li>
        <li class="nav-item">
            <button data-bs-target="#tabPlans" class="nav-tab-buttons nav-link me-2" aria-info="Plans" data-bs-toggle="tab" type="button" role="tab">
                <i class="fa-solid fa-swatchbook"></i>
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons nav-link nav-item-pops me-2">
                <i class="fa-solid fa-compass-drafting"></i>
            </button>
        </li>
        <li class="nav-item">
            <button class="nav-tab-buttons nav-link nav-item-pops me-2">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
        </li>
    </ul>


    <div class="tab-content border-0">
        <?php
        include "src/components/navTabs/tabOverviewBottom.php";
        ?>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
    </div>




</div>