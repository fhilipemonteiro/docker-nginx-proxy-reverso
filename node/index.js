const { name } = require('ejs')
const express = require('express')
const mysql = require('mysql2/promise')
const path = require('path') 

const app = express() 
const port = 3000 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const configDB = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
} 

const products = [
  { name: 'Produto 1', sku: 10001 },
  { name: 'Produto 2', sku: 10002 },
  { name: 'Produto 3', sku: 10003 },
  { name: 'Produto 4', sku: 10004 },
  { name: 'Produto 5', sku: 10005 },
  { name: 'Produto 6', sku: 10006 },
  { name: 'Produto 7', sku: 10007 },
  { name: 'Produto 8', sku: 10008 },
  { name: 'Produto 9', sku: 10009 },
  { name: 'Produto 10', sku: 10010 }
];

products.forEach(async (product) => {
  const db = await mysql.createConnection(configDB) 
  db.query(`INSERT INTO products (name, sku) VALUES (?, ?)`, [product.name, product.sku])
  db.end()
})


app.get('/', async (req, res) => {
  try {
    const db = await mysql.createConnection(configDB) 
    const [rows] = await db.execute('SELECT * FROM products')
    db.end() 
    const produtosOrdenados = rows.sort((a, b) => a.sku - b.sku);
    res.render('pagina', { produtos: produtosOrdenados }) 
  } catch (error) {
    console.error('Erro na consulta:', error) 
    res.status(500).send('Erro interno do servidor') 
  }
}) 

app.listen(port) 
