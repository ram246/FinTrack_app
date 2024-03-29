let express = require('express');
let app = express();
let users = require('./routes/users.js');
let expenses = require('./routes/expenses.js');
let stock = require('./routes/stock.js');
let news = require('./routes/news.js');
const PORT = process.env.PORT || 5000;
const session = require('express-session');

app.use(session({
    secret: 'please change this secret',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('./fintrack/frontend/build'));

app.use('/api/user', users);
app.use('/api/expense', expenses);
app.use('/api/investments', stock);
app.use('/api/news', news);

//To catch the invalid paths that need redirection
app.use('/signup', (req, res) => {
    res.redirect('/');
});
app.use('/login', (req, res) => {
    res.redirect('/');
});
app.use('/dashboard', (req, res) => {
    res.redirect('/');
});
app.use('/profile', (req, res) => {
    res.redirect('/');
});
app.use('/expenses', (req, res) => {
    res.redirect('/');
});
app.use('/investments', (req, res) => {
    res.redirect('/');
});
app.use('/about', (req, res) => {
    res.redirect('/');
});

// to catch any other path and return 404
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that in Fintrack api!");
});


app.listen(PORT, () => console.log('Start listening on port 5000!'));
