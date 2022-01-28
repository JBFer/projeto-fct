<?php
//display all products

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

$app->get('/products', function(Request $request, Response $response){


    require_once(__DIR__ .'/../dbconnect.php');

    $query = "SELECT * FROM products";
    $result = $mysqli->query($query);

    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    //echo '<pre>';var_dump($data); die();

    
    if (isset($data)) {
        $payload = json_encode($data);
    } else {
        $payload = json_encode('Error 400 Register not found');
    }
    
    
    
    $response->getBody()->write($payload);
    return $response
          ->withHeader('Content-Type', 'application/json');
});


//filtrar products só por id

$app->get('/products/{id:[0-9]+}', function (Request $request, Response $response) {
    
    require_once(__DIR__ .'/../dbconnect.php');

    $id = $request->getAttribute('id');
    
    $query = "SELECT * FROM products WHERE idproducts = ? order by idproducts";

    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('i', $id);
    $stmt->execute();

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    //$result = $mysqli->query($query);

    //while($row = $result->fetch_assoc()) {
    //    $data[] = $row;
    //}
    //echo '<pre>';var_dump($data); die();

    
    if (isset($data)) {
        $payload = json_encode($data);
    } else {
        $payload = json_encode('Error 400 Register not found');
    }
    
    $response->getBody()->write($payload);
    return $response->withHeader('Content-Type', 'application/json');

});


// filtrar products por categoria e por subcategoria


$app->get('/products/{category}[/{subcategory}]', function (Request $request, Response $response) {
    
    require_once(__DIR__ .'/../dbconnect.php');
    
    $category = $request->getAttribute('category');
    $subcategory = $request->getAttribute('subcategory');
    


    $query = $subcategory ? "SELECT * FROM products WHERE catg=? AND subcatg=?" : "SELECT * FROM products WHERE catg=?";

    $stmt = $mysqli->prepare($query);
    if(isset($subcategory)){
        $stmt->bind_param('ss', $category, $subcategory);
    } else {
        $stmt->bind_param('s', $category);
    }
    $stmt->execute();

    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    //echo '<pre>';var_dump($data); die();

    
    if (isset($data)) {
        $payload = json_encode($data);
    } else {
        $payload = json_encode('Error 400 Register not found');
    }
    
    $response->getBody()->write($payload);
    return $response->withHeader('Content-Type', 'application/json');

});