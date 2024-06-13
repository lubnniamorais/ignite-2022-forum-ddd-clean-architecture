import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { Question } from '@/domain/forum/enterprise/entities/question';

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = [];

  async create(question: Question) {
    this.questions.push(question);
  }

  async findBySlug(slug: string) {
    const question = this.questions.find(
      question => question.slug.value === slug,
    );

    if (!question) {
      return null;
    }

    return question;
  }

  async findByID(id: string): Promise<Question | null> {
    const question = this.questions.find(
      question => question.id.toString() === id,
    );

    if (!question) {
      return null;
    }

    return question;
  }

  async delete(question: Question): Promise<void> {
    const questionIndex = this.questions.findIndex(
      item => item.id === question.id,
    );

    this.questions.splice(questionIndex, 1);
  }
}
