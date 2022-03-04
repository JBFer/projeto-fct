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

$app->post('/addAdress', function(Request $request, Response $response){

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $post = $request->getParsedBody();
    $name = $post['name'];
    $adress = $post['adress'];
    $type = $post['type'];

    $query = "INSERT INTO adresses (id_user, name, adress, type) VALUES (?, ?, ?, ?)";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('isss', $_SESSION["id"], $name, $adress, $type);

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
        'msg' => 'Ok 200, new adress added',
    ];
    
return get_app()->utils->return_json($ret, $response);
});

//dar update name

//dar update pass

//dar update contribuinte

//dar update email

//dar update tel