const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Configurar el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el formulario de contacto
app.post('/contact', (req, res) => {
  // Obtener los datos del formulario desde el cuerpo de la solicitud
  const { name, email, message } = req.body;

  // Validar que se han proporcionado los datos necesarios
  if (!name || !email || !message) {
    return res.status(400).send('Faltan datos del formulario');
  }

  // Configurar el transporte de nodemailer para enviar correos electrónicos
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tu_correo@gmail.com',
      pass: 'tu_contraseña',
    },
  });

  // Configurar el contenido del correo electrónico
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Nuevo mensaje de formulario de contacto',
    text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error al enviar el correo electrónico');
    }

    console.log('Correo electrónico enviado:', info.response);
    return res.status(200).send('Correo electrónico enviado correctamente');
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
