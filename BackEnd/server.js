require('dotenv').config()
const app = require('./src/app')



app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001')
})