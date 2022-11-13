const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app =express();
const postRoutes = require('./routes/postRoutes');

app.use(cors())
app.use(express.json());
app.options('*',cors());
app.use('/api',postRoutes);

app.listen(process.env.PORT, () => console.log('Server started in port ',process.env.PORT));

mongoose.set('useFindAndModify',false);
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);
mongoose.connect(process.env.DB,(err) => {
    if(err){
       return console.log('Error al conectar base de datos ->',err)
    }
    return console.log('Conectado a la base de datos')
});
