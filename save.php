<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $details = htmlspecialchars($_POST['details']);
    
    // Detectar idioma: solo "es" activa español, todo lo demás usa inglés
    $lang = (isset($_POST['lang']) && $_POST['lang'] === 'es') ? 'es' : 'en';

    // Validación básica
    if (empty($name) || empty($email) || empty($phone) || empty($details)) {
        echo "All fields are required.";
        exit();
    }

    // Correos del equipo
    $to = "contact@herminiosframingllc.com, herminioruiz@herminiosframingllc.com, stephanie@herminiosframingllc.com";
    $subject = "New Project Estimate Request";

    // Mensaje principal para el equipo
    $message = "
        <h3>New Project Request</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Details:</strong><br>$details</p>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: Herminio's Website <contact@herminiosframingllc.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $sent = mail($to, $subject, $message, $headers);

    // ✉️ Respuesta automática al cliente según idioma
    if ($lang === 'es') {
        $auto_subject = "Gracias por contactarnos - Herminio's Framing";
        $auto_message = "
            <h3>¡Gracias por contactarnos, $name!</h3>
            <p>Hemos recibido tu solicitud y muy pronto uno de nuestros especialistas se pondrá en contacto contigo.</p>
            <p>Si necesitas atención inmediata, puedes llamarnos directamente a:</p>
            <p><strong>📞 (210) 313-8239</strong> (Español)<br>
            <strong>📞 (210) 749-6106</strong> (Inglés)</p>
            <br>
            <p>¡Gracias por confiar en nosotros!<br>
            <strong>Herminio's Framing LLC</strong></p>
        ";
    } else {
        $auto_subject = "Thank you for contacting Herminio's Framing";
        $auto_message = "
            <h3>Thank you for reaching out, $name!</h3>
            <p>We received your request and one of our team members will contact you shortly.</p>
            <p>If you need immediate assistance, feel free to call us:</p>
            <p><strong>📞 (210) 313-8239</strong> (Spanish)<br>
            <strong>📞 (210) 749-6106</strong> (English)</p>
            <br>
            <p>Thanks again for trusting us!<br>
            <strong>Herminio's Framing LLC</strong></p>
        ";
    }

    $auto_headers = "MIME-Version: 1.0\r\n";
    $auto_headers .= "From: Herminio's Framing <contact@herminiosframingllc.com>\r\n";
    $auto_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $auto_sent = mail($email, $auto_subject, $auto_message, $auto_headers);

    if ($sent && $auto_sent) {
        echo "<div class='success-message'>Thanks! We'll contact you shortly.</div>";
    } else {
        echo "Error sending message.";
    }
}
?>
