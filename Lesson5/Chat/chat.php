<?php
$pdo = new PDO('sqlite:chat.db');
if(isset($_POST['message']) && isset($_POST['user']) && !empty($_POST['message'] && !empty($_POST['user'])){
    $message = strip_tags($_POST['message']);
    $statement = $pdo->prepare(
        'INSERT INTO messages (message)'
    )
}
?>