
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//sample code to connect to sql
var connection = new ActiveXObject("ADODB.Connection");

var connectionstring = "Data Source=<server>; Initial Catalog=<catalog>;UserID=<user>;Password=<password>;Provider=SQLOLEDB";
connection.open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table",connection);
rs.MoveFirst
while(!rs.eof)
{
    document.write(rs.fields(1));
    rs.movenext;
}
rs.close;
connection.close;

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)