const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Configurar el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el formulario de contacto
app.post('/contact', (req, res) => {
  // Aquí debes implementar la lógica para enviar correos electrónicos usando nodemailer
  // y manejar los datos del formulario (req.body).

  // Ejemplo de envío de correo electrónico
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu_correo@gmail.com',
      pass: 'tu_contraseña',
    },
  });

  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Asunto del Correo',
    text: `Mensaje del formulario: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
