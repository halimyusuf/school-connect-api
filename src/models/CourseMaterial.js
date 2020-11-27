import mongoose from 'mongoose';

const courseMaterialSchema = mongoose.Schema({
    school: {
        type: mongoose.Types.ObjectId,
        ref: 'School'
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    },
    fileLink: String
});

export default mongoose.model('CourseMaterial', courseMaterialSchema);
