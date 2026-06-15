<?php
// Get the raw POST data stream
$jsonInput = file_get_contents('php://input');

if (!empty($jsonInput)) {
	
	// 1. Decode received data to an associative array (set the second parameter to true)
	$data = json_decode($jsonInput, true); 

	// 2. Create and append a new key-value pair
	$created_at = new DateTime('now', new DateTimeZone('UTC'));
	$created_at = $created_at->format('Y-m-d\TH:i:s.v\Z');
	$data['created_at'] = $created_at;
	
	// 3. Encode back to a JSON object
	$newJsonSInput = json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); 
	
	// Remove unwanted characters from ID to make a clean filename
	$userID = $data['userID'];
	$charsToRemove = array(":", "-");
	$filename = str_replace($charsToRemove, "_", $userID);
	
	$saveDirectory = "./save_files/";
	$filecount = count(glob($saveDirectory . "*.json"));
	echo "$filecount JSON files found in save folder";
	
	// Build complete path and file name
	$file = $saveDirectory . $filename . ".json";
	//$file = $saveDirectory . $filename . "_" . ($filecount + 1). ".json";
	
	// Save to a TXT file on the server (appends data and lock file to avoid simultaneous writings)
    //file_put_contents($file, $newJsonSInput . PHP_EOL, FILE_APPEND | LOCK_EX);
	
	// Save to a JSON file on the server (appends data and lock file to avoid simultaneous writings)
	file_put_contents($file, $newJsonSInput);
    echo "Data saved to server successfully!";
} else {
    echo "No data received.";
}
?>
