var express = require('express')
var app = express()

// Posta arquivos do diretório 'public' na rota /media
app.use('/media', express.static('public'))

// Um exemplo de middleware
function middleware_acs(req, res, next) {
    console.log('O usuário está acessando "about"')
    next()
}

app.use('/about', middleware_acs)

// Instalação de rotas
var wiki = require('./wiki.js')
app.use(wiki)

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});
