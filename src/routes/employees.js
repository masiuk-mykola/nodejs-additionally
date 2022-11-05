const express = require('express');

const router = express.Router();
router.get('/', (req, res) => res.sendStatus(230))
router.get('/:id', (req, res) => res.sendStatus(230))
router.post('/', (req, res) => res.sendStatus(230))
router.patch('/:id', (req, res) => res.sendStatus(230))
router.delete('/:id', (req, res) => res.sendStatus(230))
router.put('/:id', (req, res) => res.sendStatus(230))