import {Router} from 'express'
import UserController from './models/User/UserController.js'
import VisitController from './models/Visit/VisitController.js'
import {generateUUID} from './uuid.js'

const router = new Router()

router.post('/users', UserController.create)
// router.get('/users', UserController.getAll)
// router.get('/users/:id', UserController.getOne)
// router.put('/users', UserController.update)
// router.delete('/users/:id', UserController.delete)

router.get('/id', generateUUID)

router.post('/visits', VisitController.create)
// router.get('/visits', VisitController.getAll)
// router.get('/visits/:id', VisitController.get)
// router.put('/visits', VisitController.update)
// router.delete('/visits/:id', VisitController.delete)

export default router
