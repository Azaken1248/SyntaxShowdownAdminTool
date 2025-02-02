import mongoose from 'mongoose';
import dotenv from 'dotenv';
import GamesSchema from '../DB/GamesSchema.mjs';

dotenv.config();

const connectionString = process.env.CONNECTION_STRING;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const Games = mongoose.models.Games || mongoose.model('Games', GamesSchema);

export const addGame = async (gameData) => {
    try {
      const newGame = new Games(gameData);
      await newGame.save();
      return newGame;

    } catch (error) {
      console.log(error);
      throw new Error('Failed to add game');

    }
  };
  
  export const removeGame = async (gameID) => {
    try {
      const deletedGame = await Games.findOneAndDelete({ id: gameID });
      if (!deletedGame) {
        throw new Error('Game not found');
      }

      return deletedGame;

    } catch (error) {
      throw new Error('Failed to remove game');

    }
  };
  
  export const getGameById = async (gameID) => {
    try {
      const game = await Games.findOne({ id: gameID });
      if (!game) {
        throw new Error('Game not found');
      }

      return game;

    } catch (error) {
      throw new Error('Failed to fetch game');

    }
  };

  export const updateGame = async (gameID, gameData) => {
    try {
      const updatedGame = await Games.findOneAndUpdate(
        { id: gameID },
        { $set: gameData },
        { new: true } 
      );
      if (!updatedGame) {
        throw new Error('Game not found');
      }
      return updatedGame;
    } catch (error) {
      throw new Error('Failed to update game');
    }
  };

  export const resetGame = async (gameID) => {
    try {
      const resetData = {
        winner: "Ongoing",
        next: -1
      };
      const resetGame = await Games.findOneAndUpdate(
        { id: gameID },
        { $set: resetData },
        { new: true }
      );
      if (!resetGame) {
        throw new Error('Game not found');
      }
      return resetGame;
    } catch (error) {
      throw new Error('Failed to reset game');
    }
  };