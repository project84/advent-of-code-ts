import 'reflect-metadata';
import { container } from 'tsyringe';
import { PuzzleExecutionService } from './services/puzzle/executor';

const year = '2023';
const day = '02';

(async () => {
  await import(`./puzzles/${year}/${day}/ioc.ts`);

  const executionService = container.resolve(PuzzleExecutionService);

  console.log(await executionService.execute(1));
  console.log(await executionService.execute(2));
})();
