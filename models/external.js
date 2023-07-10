import mongoose from 'mongoose';
const externalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    }
},{timestamps: true, versionKey: false})

export default mongoose.model('External', externalSchema);