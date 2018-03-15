<?php

/*
 * Set up SQLite
 */
$db = new PDO('sqlite:psd_juice.sqlite3');
$db->exec('DROP TABLE IF EXISTS juices');

$db->exec('CREATE TABLE juices (
  id INTEGER PRIMARY KEY,
  Value TEXT,
  Month TEXT,
  Unit_ID TEXT,
  Market_Year TEXT,
  Country_Name TEXT,
  Country_Code TEXT,
  Attribute_ID TEXT,
  Calendar_Year TEXT,
  Commodity_Code TEXT,
  Unit_Description TEXT,
  Commodity_Description TEXT,
  Attribute_Description TEXT)');

/*
 * Get CSV Data
 */
$csv = array_map('str_getcsv', file(dirname(__FILE__) . '/psd_juice.csv'));
$cols = implode(', ', $csv[0]);
$data = array_slice($csv, 1);

/*
 * Populate DB
 */
foreach ($data as $row) {
  $values = implode('","', $row);
  $db->exec('INSERT INTO juices (' . $cols . ') VALUES ("' . $values . '")');
}

/*
 * Inform the user
 */
die('Dabase seeded succesfully');
