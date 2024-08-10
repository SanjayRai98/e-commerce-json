import { Message } from 'rsuite';

export const displayMessage = (type, msg) => {
  return (
    <Message showIcon type={type} closable>
      <strong>{msg}</strong>.
    </Message>
  );
};
