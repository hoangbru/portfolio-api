import mongoose from 'mongoose';
const socialSchema = mongoose.Schema({
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

export default mongoose.model('Social', socialSchema);