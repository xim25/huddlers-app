const express = require('express');
const router = express.Router();
const Project = require ('../models/Project');

router.get("/", (req, res) => {
    Project.find()
        .then(projects => {
            res.status(200).json({projects});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.post("/", (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        _creator: req.body._creator,
        finalDate: req.body.finalDate
    });
    newProject.save()
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