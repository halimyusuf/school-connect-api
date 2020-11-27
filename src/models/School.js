import mongoose from 'mongoose';

const schoolSchema = mongoose.Schema({
    name: String,
    info: String,
    location: String,
    currentHead: String
});

export default mongoose.model('School', schoolSchema);
