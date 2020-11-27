import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
    name: String,
    faculty: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    }
});

export default mongoose.model('Department', departmentSchema);
