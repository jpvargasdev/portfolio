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
    'flex-1 mt-2 mb-2 p-4 text-base text-font_secondary rounded-xl shadow';

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
    <div className="flex flex-1 h-full p-6">
      <form
        className="flex flex-1 flex-col justify-between content-center"
        onSubmit={onSubmit}
      >
        <div className="flex flex-row flex-1 p-4">
          <div className="flex flex-col h-full">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={inputStyle}
            ></input>
            <input
              name="number"
              type="text"
              placeholder="Number"
              className={inputStyle}
            ></input>
            <input
              name="email"
              type="text"
              placeholder="Email"
              className={inputStyle}
            ></input>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="flex-1 m-2 text-font_primary p-4 rounded-xl shadow resize-none"
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
