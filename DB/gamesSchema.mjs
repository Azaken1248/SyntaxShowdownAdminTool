import mongoose from 'mongoose';

const gamesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    player1: {
        type: String,
        required: true
    },
    player2: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        default: "Ongoing"
    },
    next: {
        type: Number,
        default: -1
    }

});

export default mongoose.model('Games', gamesSchema);