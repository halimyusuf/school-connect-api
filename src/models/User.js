import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: {
            type: String,
            unique: true
        },
        studentMail: String,
        password: String,
        passwordResetToken: String,
        passwordResetDuration: String,
        accountVerified: {
            type: Boolean,
            default: false
        },
        accountVerificationToken: String,
        isModerator: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isStudent: {
            type: Boolean,
            default: false
        },
        school: {
            type: mongoose.Types.ObjectId,
            ref: 'School'
        },
        department: {
            type: mongoose.Types.ObjectId,
            ref: 'Department'
        },
        yearOfEntry: String,
        yearToGraduate: String
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
