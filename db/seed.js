const db = require('APP/db')

const data = require('../seed.json')
//data[keys]
const seedData = () => db.Promise.map(Object.keys(data), function(model) {
    return db.Promise.map(data[model], function(item){
      return db.model(model)
      .create(item)
    })
})


const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user))

const seedOrders = () => db.Promise.map(data.orders, order => db.model('orders').create(order))

const seedCategories = () => db.Promise.map(data.category, category => db.model('category').create(category))
const seedProducts = () => db.Promise.map(data.products, product =>  db.model('products').create(product))

const seedProdCat = () => db.Promise.map(data.category_product, catProd => db.model('category_product').create(catProd))

const seedAddresses = () => db.Promise.map(data.addresses, address => db.model('addresses').create(address))

const seedReviews = () => db.Promise.map(data.reviews, review => db.model('review').create(review))

const seedOrderProduct = () => db.Promise.map(data.order_product, orderProduct => db.model('order_product').create(orderProduct))

const seedCart = () => db.Promise.map(data.cart, cart => db.model('cart').create(cart))

const seedCartProd = () => db.Promise.map(data.cart_product, cartProduct => db.model('cart_product').create(cartProduct))




db.didSync
  .then(() => db.sync({force: true}))
  .then(seedAddresses)
  .then(seedUsers)
  .then(seedOrders)
  .then(seedCategories)
  .then(seedProducts)
  .then(seedProdCat)
  .then(seedReviews)
  .then(seedOrderProduct)
  .then(seedCart)
  .then(seedCartProd)
  .then(() => console.log('done'))
  .catch(error => console.error(error))
  .finally(() => db.close())
