let express = require("express"); // requisicao do express
const app = express();



app.get('/', (req,res) => res.send('Seja Bendo vindo ao meu servidor'));


app.get('/sobre', (req,res) => res.send('Caminho Sobre!'));

app.get('/sobre/blog',(req,res) => res.send('Bem vindo ao meu Blog mlk RECEBA! GRAÇAS A DEUS PAI EU SOU PROGRAMADOR CONTRATADO!')) ;







app.listen(8081, () => console.log('Servidor rodando na url http://localhost:8081'));