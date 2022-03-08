let fs = require("fs");

const FILE_NAME = './assets/charts.json';

let chartRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {

            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let chart = JSON.parse(data).find(p => p.id == id);
                resolve(chart);
            }
    });
},
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let charts = JSON.parse(data);
                // Preform search
                if (searchObject) {
                    //Example search object
                    // let searchObject = {
                   // "id": 1,
                   // "name": 'A'
                   // };
                   charts = charts.filter(
                       p => (searchObject.id ? p.id == searchObject.id : true) &&
                       (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true));
                   }

                   resolve(charts);
                }
            });
                }
        }

module.exports = chartRepo;
