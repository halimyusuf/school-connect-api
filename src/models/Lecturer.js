import mongoose from 'mongoose';

const lecturerSchema = mongoose.Schema({
    name: String,
    description: String,
    School: {
        type: mongoose.Types.ObjectId,
        ref: 'School'
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    }
});

export default mongoose.model('Lecturer', lecturerSchema);
