import React, { useState } from 'react'
import { useInput } from './hooks/useInput'

const App = () => {
  const [theme, setTheme] = useState(false)
  const email = useInput('', { isEmpty: true, isMail: true })
  const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 12 })

  const handleSetTheme = () => setTheme(!theme)
  const darkTheme = theme ? 'dark' : ''

  return (
    <div className={`wrapper ${darkTheme}`}>
      <button onClick={handleSetTheme} className='set-theme'>
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21.5" cy="21.5" r="21.5" fill="#2D2D2D" />
          <path d="M38 21.5C38 30.6127 30.3889 38 21 38C21 31.4 21 30.6127 21 21.5C21 12.3873 21 11.9667 21 5C30.3889 5 38 12.3873 38 21.5Z" fill="white" />
        </svg>
      </button>
      <div className='form__container'>
        <h1 className={`form__title title ${darkTheme}`}>Sign in</h1>
        <h2 className={`form__sub-title title ${darkTheme}`}>
          Sign in and start managing your candidates!
        </h2>
        <div className="form__input-block">
          {(email.isDirty && email.isEmpty) && <div className='form__input-error'>{email.emptyFields}</div>}
          {(email.isDirty && email.emailError) && <div className='form__input-error'>{email.invalidEmail}</div>}
          <input
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={email.onBlur}
            type='text'
            name='email'
            placeholder='Введите ваш E-mail..'
            className={`form__input ${darkTheme}`}
          />
        </div>

        <div className="form__input-block">
          {(password.isDirty && password.isEmpty) && <div className='form__input-error'>{email.emptyFields}</div>}
          {(password.isDirty && password.minLengthError) && <div className='form__input-error'>{email.shortPass}</div>}
          {(password.isDirty && password.maxLengthError) && <div className='form__input-error'>{email.longPass}</div>}
          <input
            value={password.value}
            onChange={(e) => password.onChange(e)}
            onBlur={password.onBlur}
            type='password'
            name='password'
            placeholder='Введите ваш пароль..'
            className={`form__input ${darkTheme}`}
          />
        </div>

        <div className='form__row row'>
          <label className={`form__label ${darkTheme}`}>
            <input type='checkbox' name='remember' />
            <span className={`form__label-check ${darkTheme}`}></span>
            <span className={`form__label-text ${darkTheme}`}>Remember Me</span>
          </label>

          <span className={`form__forgot ${darkTheme}`} >
            Forgot Password?
          </span>
        </div>

        <button
          disabled={!email.inputValid || !password.inputValid}
          className={`form__button-login ${darkTheme}`}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default App
