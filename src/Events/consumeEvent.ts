import { PubSub } from '@google-cloud/pubsub';

const pubSubClient = new PubSub();

const subscriptionName = "projects/nick-learning-322807/subscriptions/echo-api-sub"

export function consumeEvent() {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = (message: any) => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages
  subscription.on('message', messageHandler);
}