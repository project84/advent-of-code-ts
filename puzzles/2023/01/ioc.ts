import { container } from 'tsyringe';
import { PUZZLE_HANDLER } from '../../../services/puzzle/executor';
import { PuzzleHandler2023Day01 } from './handler';

container.register(PUZZLE_HANDLER, {
  useClass: PuzzleHandler2023Day01,
});
