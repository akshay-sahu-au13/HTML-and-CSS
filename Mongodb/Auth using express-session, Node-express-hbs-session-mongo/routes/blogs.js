const express = require('express');
const path = require('path');
const router = express.Router();
const layout = path.join('layouts', 'index');
const User = require('../Schemas/user');
const Blog = require('../Schemas/blog');
const auth = require('../auth/auth');


router.get()