const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Message = require('../models/message');

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /messages'
    });
});

router.post('/',(req, res, next)=>{
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        subject: req.body.subject,
        text: req.body.text
});
    message
        .save()
        .then(result => {
        console.log(result);
        })
        .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /messages',
        createdMessage: message
    });
});

router.get('/:messageId', (req, res, next)=>{
    const id = req.params.messageId;

    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID'
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:messageId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated message!'
    });
});

router.delete('/:messageId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted message!'
    });
});


module.exports = router;