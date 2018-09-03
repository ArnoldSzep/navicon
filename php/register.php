<?php

session_start();

$form_data['name'] = $_POST['reg_name'];
$form_data['phone'] = $_POST['reg_phone'];
$form_data['email'] = $_POST['reg_email'];
$form_data['password'] = $_POST['reg_pass1'];

$error = false;

// Checks
foreach ($form_data as $key => $value) {
    if ($value == '') {
        $error = true;
        break;
    }
}

if ($_POST['reg_pass1'] != $_POST['reg_pass2']) {
    $error = true;
}

// Get user json
if (file_exists('users.json')) {
    $user_data = json_decode(implode('', file('users.json')));
} else {
    $error = true;
}

if (!$error) {
    // Add New user
    array_push($user_data->users, $form_data);

    // Write to file
    $user_json = fopen('users.json', 'w+') or die('Unable to open file!');

    fwrite($user_json, json_encode($user_data));
    fclose($user_json);
}

echo json_encode($error);
