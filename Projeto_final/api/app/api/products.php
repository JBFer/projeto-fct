<?php
//things related to products

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

/*
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
            'list' => $data
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
*/

//filtrar user mais visitados

$app->get('/products/user[/{inicio:[0-9]+}/{final:[0-9]+}[/{order}]]', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $query = "
        SELECT DISTINCT
            products.*,
            CASE
				WHEN favorites.idFavorites IS NULL THEN 0
                ELSE 1
            END AS favorite
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        LEFT JOIN favorites ON favorites.id_prod = products.idProducts AND favorites.id_user = ?
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

    $inicio = $request->getAttribute('inicio');

    $final = $request->getAttribute('final');

    $field = $order ?? null;

    $inicio1 = $inicio ?? null;

    $final1 = $final ?? null;

    $sql = $field ? get_app()->utils->order_function($query, $field) : $query;
    
    $sql = $final1 ? get_app()->utils->limit_function($sql, $inicio1, $final1) : $query;

    //var_dump($sql); die();
    
    $stmt = get_app()->db->prepare($sql);

    $order = $request->getAttribute('order');

    $stmt->bind_param('ii',  $_SESSION["id"],  $_SESSION["id"]);

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
            'msg' => 'Error 404, no products found',
            'list' => []
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//get favorites

$app->get('/products/favorites[/{order}]', function (Request $request, Response $response) {
  
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
        LEFT JOIN favorites ON favorites.id_prod = products.idProducts
        WHERE
            favorites.id_user = ?
            AND
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

    $stmt->bind_param('ii', $_SESSION["id"], $_SESSION["id"]);
    
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

//get product specs

$app->get('/products/specs/{id:[0-9]+}', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $id = $request->getAttribute('id');

    $query = "
        SELECT DISTINCT
            products.*,
            subcategories.name as subcatg_name,
            categories.name as catg_name,
            companies.name as comp_name,
            companies.details as comp_details,
            companies.email as comp_email,
            companies.tel as comp_tel,
            companies.logo as comp_logo
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        LEFT JOIN companies ON companies.idCompanies = (SELECT products.id_comp from products where idProducts = ?)
        LEFT JOIN subcategories ON subcategories.id = (SELECT products.subcatg from products where idProducts = ?)
        LEFT JOIN categories ON categories.id = subcategories.id_catg
        WHERE
            products.idProducts = ?
            AND
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

    $stmt->bind_param('iiii', $id, $id, $id, $_SESSION["id"]);
    
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
    $data = $result->fetch_object();

    $cartLocal = $_SESSION["cart"] ?? array();

    $array = get_object_vars($data);

    if(in_array($array["idProducts"], $cartLocal)){
        $cartState = true;
    } else {
        $cartState = false;
    }

    if(!$data){
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, product not found '
        ];
        return get_app()->utils->return_json($ret, $response);
    }

    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
        'cartState' => $cartState,
        'object' => $data
    ];

    return get_app()->utils->return_json($ret, $response);

});

//get images

$app->get('/products/images/{id:[0-9]+}', function (Request $request, Response $response) {
  
    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $id = $request->getAttribute('id');

    $query = "
        SELECT DISTINCT
            images.url
        FROM images
        LEFT JOIN products ON products.idProducts = images.id_prod
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        WHERE
            images.id_prod = ?
            AND
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

    $stmt->bind_param('ii', $id, $_SESSION["id"]);
    
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

//procurar por nome ou empresa

$app->get('/products/search[/{txtSearch}]', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();

    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $txtSearch = $request->getAttribute('txtSearch') ?? '';
    $subcategory = (int) ($_GET['subcat'] ?? 0);
    $category = (int) ($_GET['cat'] ?? 0);
    $priceMin = (float) ($_GET['price_min'] ?? 0);
    $priceMax = (float) ($_GET['price_max'] ?? 0);

/*
    $subcategory = $request->getAttribute('subcategory') ?? null;

    if (is_null($subcategory) && preg_match('/^[0-9]+$/', $txtSearch) ) {
        $subcategory = $txtSearch;
        $txtSearch = '';
    }

    if (is_null($subcategory)) {
        $subcategory = 0;
    }
*/

    $query = "
        SELECT DISTINCT
            products.*,
            CASE
                WHEN favorites.idFavorites IS NULL THEN 0
                ELSE 1
            END AS favorite
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        LEFT JOIN favorites ON favorites.id_prod = products.idProducts AND favorites.id_user = ?
        WHERE
            products.active = 1
            AND
            (
                ? = 0
                OR
                products.subcatg = ?
            )
            AND
            (
                ? = 0
                OR
                products.subcatg IN (
                    SELECT
                        id
                    FROM subcategories
                    WHERE
                        id_catg = ?
                )
            )
            AND
            (
                products.price >= ?
            )
            AND
            (
                ? = 0
                OR
                products.price <= ?
            )
            AND
            (
                products.name LIKE CONCAT('%', ?, '%')
                OR
                products.company LIKE CONCAT('%', ?, '%')
            )
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

    //$param = "%" . $txtSearch . "%";
    //$param = $txtSearch;

    //$stmt->bind_param('isiidd', $_SESSION["id"], $txtSearch, $subcategory, $category, $priceMin, $priceMax);
    $stmt->bind_param(
        'iiiiidddssi',
        $_SESSION['id'],
        $subcategory,
        $subcategory,
        $category,
        $category,
        $priceMin,
        $priceMax,
        $priceMax,
        $txtSearch,
        $txtSearch,
        $_SESSION['id']
    );
    
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

// filtrar products por subcategoria


$app->get('/products/filter/{subcategory:[0-9]+}/{id:[0-9]+}[/{order}]', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $subcategory = $request->getAttribute('subcategory');

    $id = $request->getAttribute('id');


    $query = "
        SELECT DISTINCT
            products.*,
            CASE
				WHEN favorites.idFavorites IS NULL THEN 0
                ELSE 1
            END AS favorite
        FROM products
        LEFT JOIN pc ON pc.id_prod = products.idProducts
        LEFT JOIN collections ON collections.idCollections = pc.id_col
        LEFT JOIN favorites ON favorites.id_prod = products.idProducts AND favorites.id_user = ?
        WHERE
            products.active = 1
            AND
            products.subcatg = ?
            AND
            products.idProducts != ?
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
    $stmt->bind_param('iiii', $_SESSION["id"], $subcategory, $id, $_SESSION["id"]);

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

//adicionar favorito

$app->post('/addFavorite', function(Request $request, Response $response){

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $post = $request->getParsedBody();
    $id_prod = $post['id_prod'];

    $query = "INSERT INTO favorites (id_user, id_prod) VALUES (?, ?)";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('ii', $_SESSION["id"], $id_prod);

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
        'msg' => 'Ok 200, new favorite added',
    ];
    
return get_app()->utils->return_json($ret, $response);
});

//remover favorito

$app->delete('/removeFavorite/{id_prod:[0-9]+}', function(Request $request, Response $response){

    $id_prod = $request->getAttribute('id_prod');

    $query = "DELETE FROM favorites WHERE id_user = ? AND id_prod = ?";

    $stmt = get_app()->db->prepare($query);
    $stmt->bind_param('ii', $_SESSION["id"], $id_prod);

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
        'msg' => 'Ok 200, favorite removed',
    ];
    
return get_app()->utils->return_json($ret, $response);
});

//get categories

$app->get('/products/catgs', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $query = "
        SELECT DISTINCT
            *
        FROM
        categories
    ";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);

    $stmt = get_app()->db->prepare($sql);

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
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no categories found '
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//get subcategories

$app->get('/products/subcatgs', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }
    
    $query = "
        SELECT
            *
        FROM
        subcategories
    ";

    $order = $request->getAttribute('order');

    $field = $order ?? null;

    $sql = get_app()->utils->order_function($query, $field);

    $stmt = get_app()->db->prepare($sql);

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
            'list' => $data
        ];
    } else {
        $ret = (object) [
            'status' => false,
            'error' => 404,
            'msg' => 'Error 404, no categories found '
        ];
    }

    return get_app()->utils->return_json($ret, $response);

});

//adicionar ao carrinho

$app->post('/products/carrinho', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $post = $request->getParsedBody();
    $idProd = $post['id_prod'];

    $cartLocal = $_SESSION["cart"] ?? array($idProd);
    
    if(count($cartLocal) > 1 || $_SESSION["cart"]){
        array_push($cartLocal, $idProd);
    }

    $_SESSION["cart"] = $cartLocal;
    
    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
    ];

    return get_app()->utils->return_json($ret, $response);

});

//buscar ao carrinho

$app->get('/products/getcart', function (Request $request, Response $response) {

    $ret = get_app()->utils->check_user();
    if(!$ret->status){
        return get_app()->utils->return_json($ret, $response);
    }

    $cartLocal = $_SESSION["cart"] ?? array();
    
    $ret = (object) [
        'status' => true,
        'error' => 200,
        'msg' => 'Ok 200, you made it ヽ(･∀･)ﾉ',
        'list' => $cartLocal
    ];

    return get_app()->utils->return_json($ret, $response);

});