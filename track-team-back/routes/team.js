const express = require('express');
const router = express.Router();
const Team = require("../models/Team");

router.get("/", (req, res) => {
    Team.find()
        .populate("_company")
        .then(teams => {
            res.status(200).json({teams});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.post("/", (req, res) =>{
    const newTeam = new Team({
        name: req.body.name,
        _company: req.body._company
    });
    newTeam.save()
        .then(newTeam => {
            res.status(200).json({newTeam});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.post("/many", (req, res) =>{
    const teams = req.body;
    const newTeams = [];
    teams.forEach(team => {
        const teams = new Team({
            name: team.name,
            _company: team._company
        });
        newTeams.push(teams);
    });

    Team.insertMany(newTeams)
        .then(newTeams => {
            res.status(200).json({newTeams});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.get("/:id", (req, res) => {
    Team.findById(req.params.id)
        .populate("_company")
        .then(team => {
            res.status(200).json({team});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.patch("/:id", (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(team => {
            res.status(200).json({team});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.delete("/:id", (req, res) => {
    Team.findByIdAndRemove(req.params.id)
        .then(team => {
            res.status(200).json({team});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

module.exports = router;