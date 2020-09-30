const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port,() => {
    console.log(`app listening on ${port}`);
})