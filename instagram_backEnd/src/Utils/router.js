const {Router} = require('express');
const LikeController = require('../Controllers/LikeController');
const LoginController = require('../Controllers/LoginController');
const PostController = require('../Controllers/PostController');
const ProfileController = require('../Controllers/ProfileController');
const UserController = require('../Controllers/UserController')

const router = Router();


//Criar usuario
router.post('/users', UserController.createUser)
//Listar usuario
router.get('/users', UserController.listUsers)

//Realizar login
router.post('/login', LoginController.login)


//Postar uma foto
router.post('/posts', PostController.createPost);
//Listando post
router.get('/posts', PostController.listAllPosts);
//Deletar foto
router.delete('/posts/:post_id', PostController.deletePost);
//Editar foto
router.put('/posts/:post_id', PostController.editPost);
//Visualizar perfil de um usuario
router.get('/users/:user_id', ProfileController.listProfile)
//Dar like em uma foto
router.post('/post/:post_id/like', LikeController.likePost)
router.post('/post/:post_id/dislike', LikeController.dislike)

module.exports = router;

