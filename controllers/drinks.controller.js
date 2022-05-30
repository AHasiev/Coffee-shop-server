const Drinks = require("../model/drinks")

module.exports.drinksController = { 
    getDrinks: (req, res) => {
        Drinks.find({})
        .select("_id name price")
        .then((data) => {
            res.json(data);
        });
    },
    getDrinksAvailable: (req, res) => {
        Drinks.find().then((data) => {
            res.json(data)
        });
    },
    getDrinksId: (req, res) => {
        Drinks.findById(req.params.id).then((data) => {
            res.json(data);
        });
    },
    postDrinks: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            drinkAvailable: req.body.drinkAvailable,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            description: req.body.description
        }).then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
        });
    },
    deleteDrinks: (req, res) => {
        Drinks.findByIdAndDelete (req.params)
        .then(() => {
            res.json("Напиток удален")
        })
    },
    patchDrinks: (req, res) => {
        Drinks.findByIdAndUpdate({
            name: req.body.name,
            price: req.body.price,
            drinkAvailable: req.body.drinkAvailable,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            description: req.body.description,
        }).then((data) => {
            res.json(data)
        })
    }
}




// PATCH /drinks/:id – изменение конкретного напитка