import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository';

import { CreateQuestionUseCase } from './create-question';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to create a question', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
      attachementsIds: ['1', '2'],
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryQuestionsRepository.questions[0]).toEqual(
      result.value?.question,
    );
    expect(inMemoryQuestionsRepository.questions[0].attachements).toHaveLength(
      2,
    );
    expect(inMemoryQuestionsRepository.questions[0].attachements).toEqual([
      expect.objectContaining({ attachementId: new UniqueEntityID('1') }),
      expect.objectContaining({ attachementId: new UniqueEntityID('2') }),
    ]);
  });
});
