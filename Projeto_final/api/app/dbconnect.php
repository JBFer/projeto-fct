<?php

require_once(APP_PATH . 'utils.php');

global $mysqli;
$mysqli = null;

function dbConnect(){
    global $mysqli;

    if(is_null($mysqli)){
        $host = "localhost";
        $user = "root";
        $pass = "REYLlnd3JyKJ";
        $db_name = "epiz_30919074_api";
        $mysqli = new mysqli($host, $user, $pass, $db_name);
    }

    return $mysqli;
}

function get_db()
{
    global $mysqli;

    if (!is_null($mysqli)) {
        return $mysqli;
    }

    return dbConnect();
}
