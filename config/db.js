if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://LukystarWar:tapibaquigrafo@cluster0.uo02e.mongodb.net/test"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}