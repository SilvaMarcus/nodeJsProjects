let express = require("express"); // requisicao do express
const app = express();


app.get('/', (req,res) => {
     res.sendFile(__dirname + '/html_files/index.html')
})


app.listen(8081, console.log('Servidor Rodando na Porta 8081'))  