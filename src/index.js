const express = require ('express');
const app = express();
app.use (express.json());
const lembretes = {};
contador(0);
app.get ('/lembretes', (req, res) => {
    contador++;
const { texto } = req.body;
lembretes[contador] = {
contador, texto
}
res.status(201).send(lembretes[contador]);

    res.send(lembretes);
});
app.put ('/lembretes', (req, res) => {

});
app.listen(4000, () => {
console.log('Lembretes. Porta 4000');
});
