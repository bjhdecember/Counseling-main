let fs = require("fs");
//const { resolve } = require("path/posix");

const FILE_NAME = "./assets/charts.json";

let chartRepo = {
    post: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
            } else {
                resolve(JSON.parse(data));
            }
        });
    },
    postById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let chart = JSON.parse(data).find((p) => p.id == id);
                resolve(chart);
            }
        });
    },
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let charts = JSON.parse(data);
                // Preform search
                if (searchObject) {
                    //Example search object
                    // let searchObject = {
                    // "id": 1,
                    // "name": 'A'
                    // };
                    charts = charts.filter(
                        (p) =>
                            (searchObject.id ? p.id == searchObject.id : true) &&
                            (searchObject.name
                                ? p.name
                                    .toLowerCase()
                                    .indexOf(searchObject.name.toLowerCase()) >= 0
                                : true)
                    );
                }

                resolve(charts);
            }
        });
    },
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let charts = JSON.parse(data);
                charts.push(newData);
                fs.writerFile(FILE_NAME, JSON.stringify(charts), function (err) {
                    if (err) {
                        reject(err);
                    }
                });
            }
        });
    },
    update: function (newData, id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            } else {
                let charts = JSON.parse(data);
                let chart = charts.find((p) => p.id == id);
                if (chart);
                {
                    Object.assign(chart, newData);
                    fs.writeFile(FILE_NAME, JSON.stringify(charts), function (err) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(newData);
                        }
                    });
                }
            }
        });
    },
};

module.exports = chartRepo;
