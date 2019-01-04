const express = require('express');
const router = express.Router();
const Company = require("../models/Company");

router.get("/", (req, res) => {
    Company.find()
        .then(companies => {
            res.status(200).json({companies});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.post("/", (req, res) =>{
    const newCompany = new Company({
        name: req.body.name,
    });
    newCompany.save()
        .then(newCompany => {
            res.status(200).json({newCompany});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.get("/:id", (req, res) => {
    Company.findById(req.params.id)
        .then(company => {
            res.status(200).json({company});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

router.patch("/:id", (req, res) => {
   Company.findByIdAndUpdate(req.params.id, req.body, {new:true})
       .then(company => {
           res.status(200).json({company});
       })
       .catch(err => {
           res.status(500).json({err});
       })
});

router.delete("/:id", (req, res) => {
    Company.findByIdAndRemove(req.params.id)
        .then(company => {
            res.status(200).json({company});
        })
        .catch(err => {
            res.status(500).json({err});
        })
});

module.exports = router;