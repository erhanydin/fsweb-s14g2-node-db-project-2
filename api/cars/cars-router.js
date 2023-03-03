// HOKUS POKUS

const router = require('express').Router();
const middleware = require("./cars-middleware");
const model = require("./cars-model");


router.get("/", async (req, res, next) => {
    try {
        const allCars = await model.getAll();
        res.json(allCars);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", middleware.checkCarId, async (req, res, next) => {
    try {
        res.json(req.car);
    } catch (error) {
        next(error);
    }
})

router.post("/", middleware.checkCarPayload, middleware.checkVinNumberValid, middleware.checkVinNumberUnique, async (req, res, next) => {
    try {
        let insertedCar = await model.create(req.body);
        res.json(insertedCar);
    } catch (error) {
        next(error);
    }
})



// Hata 
router.use((err, res, req) => {
    res.status(err.status || 400).json({
        customMessage: "Bir haata oluştu",
        message: err.message
    });
});



module.exports = router;