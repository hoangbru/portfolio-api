import mongoose from 'mongoose';
const technologySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
    },
    image: {
        typeof: String,
    },
    projects: [{
        type: mongoose.Types.ObjectId,
        ref: "Project",
    }]
},{timestamps: true, versionKey: false})

export default mongoose.model('Technology', technologySchema);