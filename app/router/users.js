const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,delete:del,update} = require('../controller/users')

router.get('/',find)
router.post('/',create)

router.get('/:id',findById)
router.patch('/:id',update)
router.delete('/:id',del)

module.exports = router
