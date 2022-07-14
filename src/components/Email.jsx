import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/themeProvider';

const NAME = process.env.REACT_APP_EMAIL_NAME;
const TEMPLATE = process.env.REACT_APP_EMAIL_TEMPLATE;
const KEY = process.env.REACT_APP_EMAIL_KEY;

const Email = () => {
  const ThemeMode = useTheme();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(NAME, TEMPLATE, form.current, KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <FormBox theme={ThemeMode[0]}>
      <form ref={form} onSubmit={sendEmail}>
        <Field theme={ThemeMode[0]}>
          <label>name</label>
          <input type='text' name='user_name' />
          <label>email</label>
          <input type='email' name='user_email' required />
          <label>message</label>
          <textarea
            rows='10'
            name='message'
            placeholder='보내실 내용을 적어주세요😊'
          />
          <Submit type='submit' value='SEND 💌' theme={ThemeMode[0]} />
        </Field>
      </form>
    </FormBox>
  );
};

const FormBox = styled.div`
  ${(props) =>
    props.theme === 'light'
      ? css`
          background: rgba(102, 191, 191, 0.5);
          box-shadow: 0 8px 32px 0 rgba(15, 15, 15, 0.3);
          color: #393e46;
          border: 1px solid rgba(102, 191, 191, 0.2);
          label {
            letter-spacing: 0.5px;
          }
        `
      : css`
          background: rgba(238, 238, 238, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
          color: #eeeeee;
          border: 1px solid rgba(238, 238, 238, 0.2);
          label {
            letter-spacing: 0.6px;
          }
        `};
  width: 100%;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  transition: ease 0.5s;

  form {
    padding: 2rem;
  }
`;
const Submit = styled.input`
  ${(props) =>
    props.theme === 'light'
      ? css`
          border: 2px solid rgba(102, 191, 191, 0.2);
          &:hover {
            background-color: rgb(69 165 165 / 30%);
          }
        `
      : css`
          border: 2px solid rgba(238, 238, 238, 0.5);
          &:hover {
            background-color: rgb(169 169 169 / 50%);
          }
        `};
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;
`;
const Field = styled.div`
  margin: 5px 0;
  input[type='text'],
  input[type='email'],
  textarea[name='message'] {
    ::placeholder {
      font-size: 0.9em;
      font-weight: bold;
    }
    ${(props) =>
      props.theme === 'light'
        ? css`
            border: 2px solid rgba(255, 255, 255, 0.5);
            color: #393e46;
            ::placeholder {
              color: #59626e;
            }
          `
        : css`
            border: 2px solid rgba(238, 238, 238, 0.5);
            color: #eeeeee;
            ::placeholder {
              color: #bebebe;
            }
          `};
    margin: 5px 0;
    padding: 8px;
    font-size: 18px;
    width: 100%;
    background: none;
    border-radius: 5px;
  }
  input[type='text']:focus-visible,
  input[type='email']:focus-visible,
  textarea[name='message']:focus-visible {
    outline: none;
  }
  label {
    font-weight: bold;
  }
`;
export default Email;
