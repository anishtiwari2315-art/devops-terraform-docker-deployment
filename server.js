const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>DevOps Task 4</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1 style="color: #28a745;">🚀 DevOps Task 4 - Deployment Successful!</h1>
        <p>EC2 + Terraform + Docker deployment is working.</p>
        <hr>
        <p><strong>Tech Stack:</strong> Node.js + Express + Docker</p>
        <p><strong>Deployed on:</strong> AWS EC2</p>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
