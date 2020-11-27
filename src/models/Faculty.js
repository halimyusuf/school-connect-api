import mongoose from 'mongoose';

const facultySchema = mongoose.Schema({
    name: String,
    school: {
        type: mongoose.Types.ObjectId,
        ref: 'School'
    },
    departments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Department'
        }
    ]
});
