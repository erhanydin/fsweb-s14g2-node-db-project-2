const db = require("../../data/db-config");


const getAll = () => {
  // HOKUS POKUS
  return db("cars");
}

const getById = (id) => {
  // HOKUS POKUS
  return db("cars").where({id}).first();
}

const create = (car) => {
  // HOKUS POKUS
  return db("cars").insert(car).then(newId => {
    return getById(newId[0]);
  });
}


module.exports = {
  getAll,
  getById,
  create
};