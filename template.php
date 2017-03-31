<?php
    // Map for actions images
    $images_urls = array(
        "145" => "img/drink.png",
        "146" => "img/eat.png",
        "147" => "img/time.png",
        "148" => "img/game.png",
    )
?>
<!DOCTYPE html>
<html lang="ru" class="no-js">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Maxim Filippovsky</title>
        <meta content="" name="description">
        <meta content="" name="keywords">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="telephone=no" name="format-detection">
        <meta name="HandheldFriendly" content="true">

        <!--[if (gt IE 9)|!(IE)]><!-->
        <link href="./css/main.css" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <meta property="og:title" content="default title">
        <meta property="og:title" content="">
        <meta property="og:url" content="">
        <meta property="og:description" content="">
        <meta property="og:image" content="">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="500">
        <meta property="og:image:height" content="300">
        <meta property="twitter:description" content="">
        <link rel="image_src" href="">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <script>
            (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)
        </script>
    </head>

    <body class="page">
        <div class="actions">
            <div class="actions__counter">
                <div class="star__counter">
                    <div class="star"></div>
                    <div class="counter"> 
                        <span class="counter__text"><?=$current_points?>
                    </span>
                    </div>
                </div>
            </div>
            <div class="actions__controls">

                <?php foreach ($actions as $key=>$val):?>

                    <div class="action__item">
                        <img src="<?=$images_urls[$actions[$key]['id']]?>" 
                             data-id="<?=$actions[$key]['id']?>" 
                             data-points="<?=$actions[$key]['points']?>" 
                             data-counter="<?=$actions[$key]['recovery_time']?>" 
                             class="action__btn">
                        <div class="counter"></div>
                    </div>

                <?php endforeach;?>

            </div>
        </div>

        <script src="./js/Counter.js"></script>
        <script src="./js/Action.js"></script>
        <script src="./js/App.js"></script>
    </body>

</html>
