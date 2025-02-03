import mongoose from 'mongoose';

const gamesSchema = new mongoose.Schema({
    id: {
        type: String,
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
        type: String,
        default: "na"
    }

});

export default mongoose.model('Games', gamesSchema);