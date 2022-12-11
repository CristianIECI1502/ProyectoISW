const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app =express();
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');


app.use(cors())
app.use(express.json());
app.options('*',cors());
app.use('/api',postRoutes);
app.use('/api',commentRoutes);
app.use('/api',userRoutes);
app.use('/api',reportRoutes);

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
