<?php

    $current_points = 123;
    $status;

    $actions = array(
        0 => array(
            'id' => 145,
            'title' => 'drink',
            'rest_time' => 0,
            'recovery_time' => 160,
            'points' => 10,
        ),
        1 => array(
            'id' => 146,
            'title' => 'eat',
            'rest_time' => 428,
            'recovery_time' => 60,
            'points' => 20,
        ),
        2 => array(
            'id' => 147,
            'title' => 'sleep',
            'rest_time' => 0,
            'recovery_time' => 48,
            'points' => 30,
        ),
        3 => array(
            'id' => 148,
            'title' => 'game',
            'rest_time' => 0,
            'recovery_time' => 38,
            'points' => 10,
        ),
    );
    
    function set_сounter($points){
        $current_points = $current_points + $points;
    }

    if ($_POST && $_POST['id']){
        $id = $_POST['id'];
        $key = array_search($id, array_column($actions, "id"));
        $points_item = (int) $actions[$key]['points'];
        
        if (is_int($key) && is_int($points_item)) {
            set_сounter($points_item);
            $status["status"] = "OK";
        } else {
            $status["status"] = "ERROR";
        }

        if ($status["status"] == "OK") {
            header("HTTP/1.0 200 OK!");
            echo json_encode($status);
            exit;
        } else {
            header("HTTP/1.0 500 Action ID not defined");
            echo json_encode($status);
            exit;
        }
        
    }
    
    include(__DIR__ . './template.php');