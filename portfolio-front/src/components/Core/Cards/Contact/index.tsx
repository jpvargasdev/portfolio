import React from 'react';

import Button from '../../../Base/Button';

async function postMessage(body: any) {
  return fetch('http://0.0.0.0:8080/chat/chat', {
    method: 'POST',
    body,
  });
}

function ContactCard() {
  const inputStyle =
    'basis-1/4 m-2 p-2 text-base text-font_secondary rounded-xl';

  const onSubmit = React.useCallback(async (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const body = {
      name: evt.target.name.value,
      number: evt.target.number.value,
      email: evt.target.email.value,
      message: evt.target.message.value,
    };
    await postMessage(body);
  }, []);

  return (
    <div className="h-full w-full">
      <form
        className="h-full flex flex-col justify-between content-center p-6"
        onSubmit={onSubmit}
      >
        <div className="flex flex-1 flex-col">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className={inputStyle}
          ></input>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className={inputStyle}
          ></input>

          <textarea
            name="message"
            placeholder="Message"
            className="basis-4/5 m-2 p-2 text-base text-font_secondary rounded-xl resize-none"
          ></textarea>
        </div>

        <Button>
          <input
            type="submit"
            value="Submit"
            className="p-2 cursor-pointer w-full h-full"
          ></input>
        </Button>
      </form>
    </div>
  );
}

export default ContactCard;
