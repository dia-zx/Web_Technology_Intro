<?php
$pdo = new PDO('sqlite:chat.db');
$pdo->exec('CREATE TABLE messages(
  id SERIAL PRIMARY KEY,
  user   VARCHAR(100),
  message_text TEXT)');
?>