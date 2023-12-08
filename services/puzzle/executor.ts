import { InjectionToken, inject, injectable } from 'tsyringe';
import { IPuzzleHandler } from '../../models/puzzle/handler';

export const PUZZLE_HANDLER: InjectionToken<IPuzzleHandler> =
  Symbol.for('PUZZLE_HANDLER');

@injectable()
export class PuzzleExecutionService {
  constructor(@inject(PUZZLE_HANDLER) private handler: IPuzzleHandler) {}

  async execute(part: number) {
    return part === 1 ? this.handler.part1() : this.handler.part2();
  }
}
