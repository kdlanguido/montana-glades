<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Montana Glades Philippines">

    <title>Montana Glades</title>

    <!-- <link rel="preconnect" href="https://cdnjs.cloudflare.com"> -->
    <!-- <link rel="preconnect" href="https://code.jquery.com"> -->
    <link rel="preconnect" href="https://res.cloudinary.com">

    <link rel="icon" type="image/x-icon" href="src/static/logo.webp">
    <link rel="stylesheet" href="src/styles/all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    -->
    <!-- <link rel="stylesheet" href="src/libs/splide.min.css"> -->
    <!-- <link rel="stylesheet" href="src/libs/splide-sea-green.min.css"> -->
    <!-- <link rel="stylesheet" href="src/libs/bootstrap.css"> -->
    <!-- <link rel="stylesheet" href="src/styles/global.css">
    <link rel="stylesheet" href="src/styles/header.styles.css">
    <link rel="stylesheet" href="src/styles/navlinks.styles.css">
    <link rel="stylesheet" href="src/styles/navTabs.styles.css">
    <link rel="stylesheet" href="src/styles/inquireModal.styles.css"> -->
</head>

<body>

    <section class="justify-content-center w-100 h-100 bg-dark align-items-center flex-column" id="loading-page">
        <img src="src/static/logo.webp" width="260" height="auto" alt="">
        <div class="loader"></div>
    </section>

    <section id="main-content" style="display:none">
        <?php
        include "src/components/header/header.php";
        include "src/components/navTabs/navTabs.php";
        include "src/components/constructionUpdates/constructionUpdatesModal.php";
        include "src/components/shareModal/shareModal.php";
        include "src/components/inquireNow/inquireNowModal.php";
        include "src/components/fullscreenModal/fullscreenModal.php";
        include "src/components/sideMenu/sideMenu.php";
        ?>
    </section>

    <script src="src/functions/all.min.js"></script>
    <!-- <script src="src/libs/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="src/libs/splide.min.js"></script>
    <script src="src/functions/constructionModal.js"></script>
    <script src="src/functions/navTabs.js"></script>
    <script src="src/functions/fullscreenModal.js"></script> -->

</body>

</html>