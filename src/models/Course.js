import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    name: String,
    school: {
        type: mongoose.Types.ObjectId,
        ref: 'School'
    },
    studentDepartment: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    },
    courseDepartment: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    },
    level: Number,
    lecturers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Lecturer'
        }
    ],
    description: String
});

export default mongoose.model('Course', courseSchema);
