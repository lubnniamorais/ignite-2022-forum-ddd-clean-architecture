import { DomainEvents } from '@/core/events/domain-events';
import { EventHandler } from '@/core/events/event-handler';
import { AnswerCreatedEvent } from '@/domain/forum/enterprise/events/answer-create-event';

export class OnAnswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions();
  }

  // O this que está dentro do método bind() sempre será a classe em que estamos,
  //  ou seja, OnAnswerCreated nesse caso
  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    );
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    console.log(answer);
  }
}
