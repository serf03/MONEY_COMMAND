const mongoose = require("mongoose");

 mongoose.connect('mongodb+srv://Serf:Sisdeveloper@cluster0.itlbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(d=> console.log("BASE DE DATOS CONECTADA!"))
    .catch(r => console.log(r))
