<?php
//things related to login and logout

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

//login
$app->post('/login', function(Request $request, Response $response){
    $post = $request->getParsedBody();
    $email = $post['email'];
    $pass = $post['pass'];

    //var_dump($post['pass']);
    //var_dump(get_app()->db);die;

    $query = "SELECT idUsers,pass FROM users WHERE email = ?";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('s', $email);

    $ok = $stmt->execute();

    
    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return $app->utils->return_json($ret, $response);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_assoc();

    //var_dump($pass,$data);die;

    if(!password_verify($pass, $data["pass"])){
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no user or password found (ㆆ_ㆆ)',
            'login' => false
        ];
        return get_app()->utils->return_json($ret, $response);
    }

    $_SESSION["email"] = $email;
    $_SESSION["id"] = $data["idUsers"];
    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you are logged in ヽ(･∀･)ﾉ',
        'login' => true
    ];

    return get_app()->utils->return_json($ret, $response);
});

//verify login

$app->get('/verifylogin', function(Request $request, Response $response){

    if(isset($_SESSION["email"])) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'login' => true
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 401,
            'msg' => 'Error 401, you need to login ',
            'login' => false
        ];
    }

return get_app()->utils->return_json($ret, $response);
});

//logout

$app->get('/logout', function(Request $request, Response $response){


    $_SESSION = array();

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, succesfull logout',
        'login' => false,
    ];

return get_app()->utils->return_json($ret, $response);
});

//adicionar moradas

$app->post('/user/addmorada', function(Request $request, Response $response){

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $post = $request->getParsedBody();
    $name = $post['name'];
    $address = $post['address'];
    $type = $post['type'];

    $query = "INSERT INTO addresses (id_user, name, address, type) VALUES (?, ?, ?, ?)";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('isss', $_SESSION["id"], $name, $address, $type);

    $ok = $stmt->execute();

    
    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, new address added',
    ];
    
return get_app()->utils->return_json($ret, $response);
});

//ver moradas do user

$app->get('/user/moradas', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $query = "
        SELECT
            *
        FROM
        addresses 
        WHERE
        id_user = ?
    ";

    $stmt = get_app()->db->prepare($query);

    $stmt->bind_param('i', $_SESSION["id"]);
    
    $ok = $stmt->execute();

    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'idUser' => $_SESSION["id"],
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no addresses found',
            'list' => []
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//remover morada

$app->delete('/del_morada/{id_add:[0-9]+}', function(Request $request, Response $response){

    $id_add = $request->getAttribute('id_add');

    $a = intval($id_add);

    $query = "DELETE FROM addresses WHERE id_user = ? AND idAddresses = ?";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('ii', $_SESSION["id"], $a);

    $ok = $stmt->execute();

    
    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, address removed',
    ];
    
return get_app()->utils->return_json($ret, $response);
});

//ver informações do user

$app->get('/user/info', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $query = "
        SELECT
            name,
            contribuinte,
            email,
            tel,
            start_date
        FROM
        users 
        WHERE
        idUsers = ?
    ";

    $stmt = get_app()->db->prepare($query);

    $stmt->bind_param('i', $_SESSION["id"]);
    
    $ok = $stmt->execute();

    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifo    u (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'idUser' => $_SESSION["id"],
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no products found '
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//ver encomendas do user

$app->get('/user/orders', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $query = "
        SELECT
            *
        FROM
        orders 
        WHERE
        id_user = ?
    ";

    $stmt = get_app()->db->prepare($query);

    $stmt->bind_param('i', $_SESSION["id"]);
    
    $ok = $stmt->execute();

    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'idUser' => $_SESSION["id"],
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no products found '
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//ver detalhes encomendas

$app->post('/user/orders/details', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $post = $request->getParsedBody();
    $idOrder = $post['id'];

    $query = "
        SELECT
            *
        FROM
        orderLines
        WHERE
        id_order = ?
    ";

    $stmt = get_app()->db->prepare($query);

    $stmt->bind_param('i', $idOrder);
    
    $ok = $stmt->execute();

    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'idUser' => $_SESSION["id"],
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no products found '
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});