const RecordController = require("../controllers/record.controller");
//const Record = require("../models/record.model");

module.exports = app => {
    app.get("/api/test", RecordController.testResponse);
    app.get("/api/records/findAll", RecordController.findAllRecords);
    app.post("/api/records/create", RecordController.createRecord);
    app.get("/api/records/:_id", RecordController.findOneRecord);
    app.delete("/api/records/:_id/delete", RecordController.deleteRecord);
    app.patch("/api/records/:_id/update", RecordController.updateOneRecord)
    //app.patch("/api/records/:_id/upvote", RecordController.upvoteRecord);
}