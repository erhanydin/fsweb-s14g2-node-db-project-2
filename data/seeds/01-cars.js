// ESNEK

const defaultCars = [
    {
        vin: '123',
        make: "Honda",
        model: "Civic",
        mileage: 50000
    },
    {
        vin: '1234',
        make: "Mercedes",
        model: "C180",
        mileage: 50000
    },
    {
        vin: '12345',
        make: "Audi",
        model: "A4",
        mileage: 50000
    },
    {
        vin: '123456',
        make: "Nissan",
        model: "Almera",
        mileage: 50000
    },
    {
        vin: '1234567',
        make: "BMW",
        model: "Z4",
        mileage: 50000
    }
];


exports.seed = async function(knex) {
    await knex("cars").truncate(); // tüm verileri siler
    await knex("cars").insert(defaultCars); // varsayılan verileri ekler
};


