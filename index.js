const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const courses = require('./data/courses.json');
const allCourse = require('./data/allCourse.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('client server running');
});
app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/allCourse/:id',(req, res) =>{
    const id = req.params.id
    const selectedAllCouse = allCourse.find(c => c._id == id);
    res.send(selectedAllCouse)
});

app.get('/allCourse', (req, res) => {
    res.send(allCourse)
})
app.get('/index/:id', (req, res) => {
    const id = req.params.id
    const index_category = allCourse.filter(n => n.index == id);
    res.send(index_category);
})

app.listen(port,() =>{
    console.log('dragon nes on', port);
});

module.exports = app;