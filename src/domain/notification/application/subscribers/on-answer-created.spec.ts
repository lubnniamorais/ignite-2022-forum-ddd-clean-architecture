import { makeAnswer } from 'test/factories/make-answer';
import { OnAnswerCreated } from './on-answer-created';
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository';
import { InMemoryAnswerAttachementsRepository } from 'test/repositories/in-memory-answer-attachements-repository';

let inMemoryAnswerAttachementsRepository: InMemoryAnswerAttachementsRepository;
let inMemoryAnswersRepository: InMemoryAnswersRepository;

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnswerAttachementsRepository =
      new InMemoryAnswerAttachementsRepository();
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachementsRepository,
    );
  });

  it('should send a notification when an answer is created', async () => {
    const _ = new OnAnswerCreated();

    const answer = makeAnswer();

    await inMemoryAnswersRepository.create(answer);
  });
});
