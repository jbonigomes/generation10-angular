<?php

header('Access-Control-Allow-Origin: *');

$sql = 'SELECT * FROM juices';
$db = new PDO('sqlite:psd_juice.sqlite3');

die(json_encode($db->query($sql)->fetchAll(PDO::FETCH_ASSOC)));
