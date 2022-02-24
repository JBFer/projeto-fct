<?php
//things related to products

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

//display all products

$app->get('/products/all[/{order}]', function(Request $request, Response $response){

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
   
    $query = "SELECT * FROM products";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);


    $result = get_app()->db->query($sql);
    $data = $result->fetch_all(MYSQLI_ASSOC);

    //echo '<pre>';var_dump($data); die();

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'data' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no products found ',
            'userId' => $_SESSION["id"]
        ];
    }

    return get_app()->utils->return_json($ret, $response);
});

//filtrar com user

$app->get('/products/user[/{order}]', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $query = "
        SELECT DISTINCT
            products.*
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);

    $stmt = get_app()->db->prepare($sql);

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

    //$result = get_app()->db->query($query);

    //while($row = $result->fetch_assoc()) {
    //    $data[] = $row;
    //}
    //echo '<pre>';var_dump($data); die();

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'idUSer' => $_SESSION["id"],
            'data' => $data
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

//filtrar por nome

$app->get('/products/search/{txtSearch}[/{order}]', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $txtSearch = $request->getAttribute('txtSearch');
    
    $query = "
        SELECT DISTINCT
            products.*
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            products.name LIKE ?
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);

    $stmt = get_app()->db->prepare($sql);

    $param = "%" . $txtSearch . "%";

    $stmt->bind_param('si', $param, $_SESSION["id"]);
    
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

    //$result = get_app()->db->query($query);

    //while($row = $result->fetch_assoc()) {
    //    $data[] = $row;
    //}
    //echo '<pre>';var_dump($data); die();

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'data' => $data
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


//filtrar products só por id

$app->get('/products/id/{id:[0-9]+}', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $id = $request->getAttribute('id');
    
    $query = "
        SELECT DISTINCT
            products.*
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            products.idProducts = ?
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('ii', $id, $_SESSION["id"]);
    
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

    //$result = get_app()->db->query($query);

    //while($row = $result->fetch_assoc()) {
    //    $data[] = $row;
    //}
    //echo '<pre>';var_dump($data); die();

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'data' => $data
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

// filtrar products por subcategoria


$app->get('/products/filter/{subcategory:[0-9]+}[/{order}]', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $subcategory = $request->getAttribute('subcategory');

    $query = "
        SELECT DISTINCT
            products.*
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            products.subcatg = ?
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);

    $stmt = get_app()->db->prepare($sql);
    $stmt->bind_param('ii', $subcategory, $_SESSION["id"]);

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

    //echo '<pre>';var_dump($data); die();

    
    if (count($data)) {
        $ret = (object) [
            'status' => true,
            'error' => 200,
            'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
            'data' => $data
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


//dar update ao stock de acordo com a quantidade comprada (qnt) de um certo produto (idProducts)

$app->put('/products/updateStock/{idProducts:[0-9]+}/{qnt:[0-9]+}', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $put = $request->getParsedBody();
    $idProducts = $request->getAttribute('idProducts');
    $qnt = $request->getAttribute('qnt');
    $qnt = intval($qnt);

    $getStock = "
        SELECT DISTINCT
            products.stock
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            products.idProducts = ?
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $statement = get_app()->db->prepare($getStock);
    
    $statement->bind_param('ii', $idProducts, $_SESSION["id"]);
    
    $ok = $statement->execute();

    if(!$ok){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $statement->get_result();
    $data = $result->fetch_assoc();

    $stock = $data["stock"];

    if ($stock < 0){
        $ret = (object) [
            'status' => true,
            'error' => 204,
            'msg' => 'Error 204, atualmente este produto encontra-se esgotado, contacte a empresa ou tente mais tarde.'
        ];

        return get_app()->utils->return_json($ret, $response);
    }


    $stock = $stock - $qnt;



    $query = "UPDATE products SET stock=? WHERE idProducts=?";


    $stmt = get_app()->db->prepare($query);
    
    $stmt->bind_param('ii', $stock, $idProducts);
    
    $ok2 = $stmt->execute();

    if(!$ok2){
        $ret = (object) [
            'status' => false,
            'error' => 504,
            'msg' => 'Error 504, não foste rápido que chegue ¯\_(ツ)_/¯'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    //echo '<pre>';var_dump($data); die();

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ'
    ];

    return get_app()->utils->return_json($ret, $response);




} );

//dar update (+1) às views de um certo produto (idProducts)

$app->put('/products/updateViews/{idProducts:[0-9]+}', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $put = $request->getParsedBody();
    $idProducts = $request->getAttribute('idProducts');

    $getViews = "
        SELECT DISTINCT
            products.views
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            products.active = 1
            AND
            products.idProducts = ?
            AND
            (
                collections.idCollections IS NULL
                OR
                collections.status = 1
            )
            AND(
                pc.id_col IS NULL
                OR
                pc.id_col NOT IN (
                    SELECT
                        uc.id_col
                    FROM uc
                    WHERE
                        uc.id_user = ?
                )
            )
    ";

    $statement = get_app()->db->prepare($getViews);
    
    $statement->bind_param('ii', $idProducts, $_SESSION["id"]);   
    $notOk = $statement->execute();

    if(!$notOk){
        $ret = (object) [
            'status' => false,
            'error' => 500,
            'msg' => 'Error 500, a database pifou (งº_º)ง'
        ];

        return get_app()->utils->return_json($ret, $response);
    }

    $result = $statement->get_result();
    $data = $result->fetch_assoc();

    $views = $data["views"];


    $views = $views + 1;



    $query = "UPDATE products SET views=? WHERE idProducts=?";


    $stmt = get_app()->db->prepare($query);
    
    $stmt->bind_param('ii', $views, $idProducts);
    $notOk2 = $stmt->execute();

    if(!$notOk2){
        $ret = (object) [
            'status' => false,
            'error' => 504,
            'msg' => 'Error 504, não foste rápido que chegue ¯\_(ツ)_/¯'
        ];

        return get_app()->utils->return_json($ret, $response);
    }


    //echo '<pre>';var_dump($data); die();

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ'
    ];

    return get_app()->utils->return_json($ret, $response);




} );
