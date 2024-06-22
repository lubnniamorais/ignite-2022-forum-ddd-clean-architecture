import { QuestionComment } from '../../enterprise/entities/question-comment';
import { QuestionCommentsRepository } from '../repositories/question-comments-repository';

interface FetchQuestionQuestionCommentsUseCaseRequest {
  questionId: string;
  page: number;
}

interface FetchQuestionQuestionCommentsUseCaseResponse {
  questionComments: QuestionComment[];
}

export class FetchQuestionQuestionCommentsUseCase {
  constructor(private questioncommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionQuestionCommentsUseCaseRequest): Promise<FetchQuestionQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questioncommentsRepository.findManyByQuestionId(questionId, {
        page,
      });

    return {
      questionComments,
    };
  }
}
