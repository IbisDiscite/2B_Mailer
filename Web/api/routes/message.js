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
            res.status(201).json({
                message: 'Handling POST requests to /messages',
                createdMessage: result
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });


});

router.get('/:messageId', (req, res, next)=>{
    const id = req.params.messageId;
    Message.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc){
                res.status(200).json(doc);
            } else {
                res.status(404).json(message: 'No valid entry found for provided Id');
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
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