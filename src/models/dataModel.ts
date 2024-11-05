// models/dataModel.js
import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    home: {
        type: String,
    },
    about: {
        type: String,
    },
    stories: {
        type: String,
    },
    contact: {
        type: String,
    },
    work: {
        type: String,
    },
});

const Content = mongoose.models.DataModel || mongoose.model("DataModel", dataSchema);

export default Content;
