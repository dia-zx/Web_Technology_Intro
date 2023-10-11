<?php
$pdo = new PDO('sqlite:chat.db');
if(isset($_POST['message']) && isset($_POST['user']) && !empty($_POST['message'] && !empty($_POST['user'])){
    $message = strip_tags($_POST['message']);
    $statement = $pdo->prepare(
        'INSERT INTO messages (user, message_text) VALUES (?, ?)'
    );
    $statement->execute([$_POST['user'], $message]);
    $result = ['status' => "ok"];
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    die();
}

$statement = $pdo->prepare(
    'SELECT user, message_text FROM messages ORDER BY id DESC LIMIT 10;'
);
$statement->execute();
$messages = $statement->fetchAll(PDO::FETCH_ASSOC);
$result = [
    'status' => "ok"
    'messages' => $messages
];
echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>