const express = require('express');
const router = express.Router();
const Project = require ('../models/Project');

router.get("/:id",  (req, res) => {
    Project.find({company:req.params.id})
        .then(projects => {
            res.status(200).json({projects});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.post("/", (req, res) => {
    Project.create(req.body)
        .then(newProject => {
            res.status(200).json({newProject});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.patch("/:id", (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(project => {
            res.status(200).json({project});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

module.exports = router;