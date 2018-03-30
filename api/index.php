<?php

require __DIR__ . '/vendor/autoload.php';

function loadFile($name) {
    return file_get_contents(__DIR__ . '/' . $name);
}

function shortNameGenerator($longname) {
    $longname = strtolower($longname);
    $longname = str_replace(' ', '_', $longname);
    return $longname;
} 

function addInJson($gamename, $shortname, $url) {
    $json = file_get_contents('./data.json');
    $obj = json_decode($json);
    $gameobject = (object) ['gamename' => $gamename, 
        'url' => $url];
    $obj->games->{$shortname} = $gameobject;
    $encodedjson = json_encode($obj);
    file_put_contents('./data.json', $encodedjson);
}

function removeInJson($shortname) {
    $json = file_get_contents('./data.json');
    $obj = json_decode($json);
    unset($obj->games->$shortname);
    $encodedjson = json_encode($obj);
    file_put_contents('./data.json', $encodedjson);
}


$klein = new \Klein\Klein();

$klein->respond('GET', '/games/api/games/list', function($request, $response) {
    $response->header('Access-Control-Allow-Origin', '*');
    $json = file_get_contents('./data.json');
    $obj = json_decode($json);
    $send = $request->param('format', 'json');
    $response->$send($obj);
});

$klein->respond('POST', '/games/api/games/add', function($request, $response) {
    $response->header('Access-Control-Allow-Origin', '*');
    $gamename = $request->gamename;
    $password = $request->password;
    $url = $request->url;

    if(!$password) {
        return 'Please provide a password';
    }
    if($password !== '&&!!nola') {
        return 'Password is incorrect';
    }

    $swf = file_get_contents($url);
    file_put_contents('../games/' . shortNameGenerator($gamename) . '.swf', $swf);
    addInJson($gamename, shortNameGenerator($gamename), '/games/' . shortNameGenerator($gamename) . '.swf');
    return 'Game succesfully created!';
});

$klein->respond('POST', '/games/api/games/delete', function($request, $response) {
    $response->header('Access-Control-Allow-Origin', '*');
    $gamename = $request->gamename;
    $password = $request->password;

    if(!$password) {
        return 'Please provide a password';
    }
    if($password !== '&&!!nola') {
        return 'Password is incorrect';
    }

    unlink('../games/' . shortNameGenerator($gamename) . '.swf');
    removeInJson(shortNameGenerator($gamename));
    return 'Game succesfully removed!';
});

$klein->dispatch();
?>