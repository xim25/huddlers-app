const express = require('express');
const router = express.Router();
const Task = require ('../models/Task');

router.get("/", (req, res) => {
    Task.find()
        .then(tasks => {
            res.status(200)
                .json(tasks)
        })
});

router.get("/:id", (req, res) => {
    Task.find({_project:req.params.id})

        .then(tasks => {
            console.log(tasks)
            res.status(200).json({tasks});

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err});
        })
});

router.post("/", (req, res) => {
    Task.create(req.body)
        .then(newTask => {
            res.status(200).json({newTask});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.patch("/:id", (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(task => {
            res.status(200).json({task});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

module.exports = router;