const app = require('./app');
const port = 4000;

app.listen(port, (err) => {
    if(err) return(err);
    
    console.log(`Server is listening on port ${port}`);
})