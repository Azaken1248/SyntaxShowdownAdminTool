import express from 'express';
import {
  addGame,
  removeGame,
  getGameById,
  updateGame,
  resetGame
} from '../Utils/gameUtils.mjs'; 

const gamesRouter = express.Router();

gamesRouter.post('/add', async (req, res) => {
  try {
    const newGame = await addGame(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


gamesRouter.get('/:id', async (req, res) => {
  try {
    const game = await getGameById(req.params.id);
    res.json(game);
  } catch (error) {
    if (error.message === 'Game not found') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

gamesRouter.put('/update/:id', async (req, res) => {
  try {
    const updatedGame = await updateGame(req.params.id, req.body);
    res.json(updatedGame);
  } catch (error) {
    if (error.message === 'Game not found') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});


gamesRouter.delete('/delete/:id', async (req, res) => {
  try {
    const deletedGame = await removeGame(req.params.id);
    res.json(deletedGame);
  } catch (error) {
    if (error.message === 'Game not found') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

gamesRouter.put('/reset/:id', async (req, res) => {
  try {
    const resetGameState = await resetGame(req.params.id);
    res.json(resetGameState);
  } catch (error) {
    if (error.message === 'Game not found') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

export default gamesRouter;