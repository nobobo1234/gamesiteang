<?php
if(isset($_POST['delete'])) {
    if($_POST['password'] === '**&&nola') {
        $shortname = $_POST['shortname'];
        $games = json_decode(file_get_contents('./games.json'));
        unset($games->$shortname);
        unlink('./games/' . $shortname . '.swf');
        file_put_contents('./games.json', json_encode($games));
    } else {
        exit('The password was wrong :(');
    }
} else {
    if($_POST['password'] === "**&&nola") {
        $shortname = $_POST['shortname'];
        $longname = $_POST['longname'];
        $swf = file_get_contents($_POST['swffile']);
        $games = json_decode(file_get_contents('./games.json'));
        $games->$shortname = (object) array('name' => $longname, 'url' => './games/' . $shortname . '.swf');
        file_put_contents('./games/' . $shortname . '.swf', $swf);
        file_put_contents('./games.json', json_encode($games));
    } else {
        exit('The password was wrong :(');
    }
}
?>
