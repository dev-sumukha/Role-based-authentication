import express from 'express';
import { register, login } from '../controllers/authController.js';
import { verifyToken, roleCheck } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes with role-based access control
router.get('/admin', verifyToken, roleCheck(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

router.get('/user', verifyToken, roleCheck(['user', 'admin']), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

export default router;