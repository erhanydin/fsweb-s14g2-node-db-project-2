const carModel = require("./cars-model");
const vinValidator = require('vin-validator');
const db = require("../../data/db-config");


const checkCarId = async (req, res, next) => {
  // HOKUS POKUS
  try {
    const isExist = await carModel.getById(req.params.id);
    if(!isExist) {
      res.status(400).json({message: `${req.params.id} kimliğine sahip araba bulunamadı`});
    } else{
      req.car = isExist; // router'dan kolaylıkla çağırabilmek için car object'i oluşturduk

    }
    next();
  } catch (error) {
    next(error);
  }
}

const checkCarPayload = async(req, res, next) => {
  // HOKUS POKUS
  try {
    const fields = ["vin", "make", "model", "mileage"];
    let missedFields = [];

    fields.forEach((field) => {
      if(!req.body[field]) {
        missedFields.push(field);
      } 
    });
    if(missedFields.length > 0) {
      let missedFieldsString = missedFields.join();
      res.status(400).json({message: `${missedFieldsString} is missing`});
    } else {
      next();
    }
    
  } catch (error) {
    next(error);
  }
}

const checkVinNumberValid = (req, res, next) => {
  // HOKUS POKUS
  let isValidVin = vinValidator.validate(req.body.vin);
  if(!isValidVin) {
    res.status(400).json({message: `vin ${req.body.vin} is invalid`});
  } else {
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // HOKUS POKUS
  try {
    let isExist = await db("cars").where("vin", req.body.vin).first();
    if(isExist) {
      res.status(400).json({message: `${req.body.vin} already exists`});
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }

}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
