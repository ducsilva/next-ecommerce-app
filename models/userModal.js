import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dxs1zdei2/image/upload/v1617510369/ava_qzyafz.jpg'
    }
}, {
    timestamps: true,
});

let Dataset = mongoose.model.user || mongoose.model('user', userSchema);

export default Dataset;