let hbs= require('hbs')
let path= require('path');
let express= require('express');
let app= express();
const port = 8000
app.listen(port, ()=>{console.log(`Listening at port: http://localhost:${port}`)})
app.set('view engine', 'hbs');
let templates= path.join(__dirname, '../templates/views')
app.set('views', templates)
hbs.registerPartials(path.join(__dirname, '../templates/partials/'))
app.get('/wiki/:title', (req, res)=>{
    let title= req.params.title;
    res.render('index', ({
        title:title,
    }))
})
app.get('/', (req, res)=>{
    res.render('content')
})
app.get('*', (req, res)=>{
    res.render('404', ({
        errorMessage: 'Oops! Something went wrong'
    }))
})
let state= path.join(__dirname, '../public')
app.use(express.static(state))
// http://localhost:8000