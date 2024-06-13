import { Question } from '../../enterprise/entities/question';

export interface QuestionsRepository {
  create(question: Question): Promise<void>;
  findByID(id: string): Promise<Question | null>;
  findBySlug(slug: string): Promise<Question | null>;
  delete(question: Question): Promise<void>;
}
