
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    
    if (mongoose.connection.readyState >= 1) {
        console.log("database already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '');
        console.log("database connected to");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
    
};

export default connectToDatabase;