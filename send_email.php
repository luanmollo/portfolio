<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['mensaje']);

    $to = 'luanmollo@gmail.com';
    $subject = 'Mensaje de ' . $name;
    $body = "Nombre: $name\nCorreo electrónico: $email\n\nMensaje:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado correctamente";
    } else {
        echo "Error al enviar el correo";
    }
} else {
    echo "Método no permitido";
}
?>
