const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Feedback App</title>
            <style>
                body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
                input, textarea { width: 100%; padding: 10px; margin: 10px 0; }
                button { background: #0078D4; color: white; padding: 10px 20px; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <h1>Laissez votre feedback</h1>
            <form method="POST" action="/api/feedback">
                <input name="email" placeholder="Votre email" required type="email" />
                <textarea name="message" placeholder="Votre message" required rows="5"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/api/feedback', (req, res) => {
    const { email, message } = req.body;
    console.log(`Feedback reçu de ${email}: ${message}`);
    res.send(`
        <h1>Merci ${email} !</h1>
        <p>Votre message a bien été reçu.</p>
        <p><strong>Votre message :</strong> ${message}</p>
        <a href="/">Retour</a>
    `);
});

app.listen(port, () => {
    console.log(`Application démarrée sur le port ${port}`);
});
