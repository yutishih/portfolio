import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function ContactForm() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 10000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className='fields'>
      <form onSubmit={handleSubmit} className='contact_form' id='contact_form'>
        <div className='returnmessage'></div>
        <div className='empty_notice'>
          <span>Please Fill Required Fields</span>
        </div>
        <div className='input_list'>
          <ul>
            <li>
              <input id='name' name='name' onChange={handleChange} type='text' placeholder="Your Name" />
            </li>
            <li>
              <input id='email' name='email' onChange={handleChange} type='text' placeholder="Your Email" />
            </li>
            <li>
              <input id='phone' type='number' placeholder="Your Phone" />
            </li>
            <li>
              <input id='subject' type="text" placeholder="Subject" />
            </li>
          </ul>
        </div>
        <div className='message_area'>
          <textarea id='message' placeholder='Write your message here' />
        </div>
        <div className='button'>
          <a id='send_message' 
            // onMouseEnter={ ()=> cursorChangeHandler(" hovered") }
            // onMouseLeave={() => cursorChangeHandler("")}
          >
            <button type="submit"><span>Contact Now</span></button>
          </a>
        </div>
        {submitting &&
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  {name}:{value.toString()}
                </li>
              ))}
            </ul>
          </div>
        }
      </form>
    </div>
  )
}

export default ContactForm