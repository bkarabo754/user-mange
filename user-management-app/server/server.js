// // server.js

// import express from 'express';
// import axios from 'axios';
// import bodyParser from 'body-parser';

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// const verifyRecaptcha = async (recaptchaToken) => {
//   const secretKey = '6LccNBcqAAAAAFZsDNDi7LqAseqBEAx8huLMaM1K';
//   const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
//     params: {
//       secret: secretKey,
//       response: recaptchaToken,
//     },
//   });

//   return response.data.success;
// };

// app.post('/add-user', async (req, res) => {
//   const { recaptchaToken, ...userData } = req.body;

//   const isValid = await verifyRecaptcha(recaptchaToken);

//   if (!isValid) {
//     return res.status(400).send('reCAPTCHA verification failed.');
//   }

//   // Add code here to handle user data (e.g., save to database)
//   // Example response for successful user addition
//   res.status(200).send('User added successfully.');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
