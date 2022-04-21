<?php
class Utils {

    function __construct() {
    }

    /**
     * Método responsável pelas respostas da API
     */
    public function return_json(stdClass $ret, $response){

        $payload = json_encode($ret);
        
        $response->getBody()->write($payload);
        return $response
              ->withHeader('Content-Type', 'application/json');
    }

    public function check_user(){
        $ret = (object) [
            'status' => false,
            'error' => 403,
            'msg' => 'Not allowed 403, cant get in buddy (╥_╥)'
        ];

        $user_id = $_SESSION["id"] ?? null;
        if ($user_id == null){
            return $ret;
        }
        $ret->status = true;
        $ret->error = 200;
        $ret->msg = "ok";
        
        return $ret;
    }

    public function order_function($query, $field){
        $allow_fields = [
            "price",
            "views"
        ];
        if (!in_array($field, $allow_fields)){
            return $query;
        }
        $query = $query . " ORDER BY products." . $field . " DESC";

        return $query;
    }

    public function limit_function($query, $inicio, $final){
        $query = $query . " LIMIT " . $inicio . ", " . $final ." ";

        return $query;
    }
}

function get_app()
{
    global $app;

    return $app;
}