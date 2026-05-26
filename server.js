const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body style="font-family:Arial;max-width:500px;margin:50px auto;padding:20px">
            <h1>Laissez votre feedback</h1>
            <form method="POST" action="/api/feedback">
                <input name="email" placeholder="Email" required type="email" style="width:100%;padding:10px;margin:10px 0"/>
                <textarea name="message" placeholder="Message" required rows="5" style="width:100%;padding:10px;margin:10px 0"></textarea>
                <button type="submit" style="background:#0078D4;color:white;padding:10px 20px;border:none">Envoyer</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/api/feedback', (req, res) => {
    const { email, message } = req.body;
    console.log(`Feedback: ${email} - ${message}`);
    res.send(`<h1>Merci ${email} !</h1><p>Votre message a bien été reçu.</p><a href="/">Retour</a>`);
});

app.listen(port, () => console.log(`App démarrée sur le port ${port}`));
