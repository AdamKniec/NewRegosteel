<?php
    $name = $_POST['fullName'];
    $visitor_email = $_POST['email'];
    $message = $_POST['messgaeContent'];

    $email_from = 'adam.k.kniec@gmail.com';
    $email_subject = 'New form sub mission';
    $email_body = 'User Name: $name.\n'.
                   'User Email: $visitor_email.\n'.
                    'User Message: $message.\n';

    $to = 'adam.k.kniec@gmail.com';
    $headers = 'From: $email_from \r\n';
    $headers .= 'Reply to: $visitor_email \r\n';

    mail($to, $email_subject, $email_body, $headers);
    header('Location: index.html');

?>
