// importo express 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog")
})

app.get('/bacheca', (req, res) => {

    // array di oggetti
    const posts = [
        {
            title: "Ciambellone soffice",
            content: "Un dolce classico della tradizione italiana, perfetto per la colazione o la merenda.",
            image: "http://localhost:3000/img/ciambellone.jpeg",
            tags: ["dolce", "colazione", "tradizione", "soffice", "fatto in casa"]
        },
        {
            title: "Cracker alla barbabietola",
            content: "Croccanti e gustosi, questi cracker alla barbabietola sono perfetti per un aperitivo sano e colorato.",
            image: "http://localhost:3000/img/cracker_barbabietola.jpg",
            tags: ["snack", "barbabietola", "croccante", "sano", "antipasto"]
        },
        {
            title: "Pane fritto dolce",
            content: "Una ricetta semplice e golosa, ideale per riutilizzare il pane avanzato in modo creativo e delizioso.",
            image: "http://localhost:3000/img/pane_fritto_dolce.jpg",
            tags: ["dolce", "fritto", "riciclo", "tradizione", "facile"]
        },
        {
            title: "Pasta alla barbabietola",
            content: "Un primo piatto colorato e originale con il gusto dolce della barbabietola che sorprende il palato.",
            image: "http://localhost:3000/img/pasta_barbabietola.jpg",
            tags: ["pasta", "barbabietola", "colorato", "vegetariano", "salutare"]
        },
        {
            title: "Torta paesana",
            content: "Un dolce tipico della Lombardia a base di pane raffermo, cacao e latte, dal sapore autentico e ricco.",
            image: "http://localhost:3000/img/torta_paesana.jpg",
            tags: ["dolce", "pane", "tradizione", "cacao", "rustico"]
        }
    ];

    res.json(posts)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


