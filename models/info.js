import mongoose from "mongoose";

const infoSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    introduce: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        default: "Phạm Việt Hoàng",
        required: true
    },
    education: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    }
},{timestamps: true, versionKey: false})

export default mongoose.model('Info', infoSchema);