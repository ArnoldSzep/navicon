<?php

session_start();

// Form data
$form_data['email'] = $_POST['email'];
$form_data['password'] = $_POST['password'];

//
$error = false;
$user_match = false;

// Get user json
if (file_exists('users.json')) {
    $user_data = json_decode(implode('', file('users.json')));
} else {
    $error = true;
}

// Checks
foreach ($form_data as $key => $value) {
    if ($value == '') {
        $error = true;
        break;
    }
}

foreach ($user_data->users as $key => $value) {
    if ($value->email == $form_data['email'] && $value->password == $form_data['password']) {
        $user_match = true;
        $user_key = $key;
        break;
    }
}

if (!$user_match) {
    $error = true;
}

if (!$error) {
    $_SESSION['logged_in'] = $user_data->users[$user_key]->name;
}

echo json_encode($error);
