import { useState } from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value, validations)

  const textErrors = {
    emptyFields: 'Поле не может быть пустым!',
    invalidEmail: 'E-mail некорректный!',
    shortPass: 'Пароль очень короткий!',
    longPass: 'Пароль очень длинный!',
    shortTel: 'Номер телефона слишком короткий!',
    longTel: 'Номер телефона слишком длинный!',
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
    ...textErrors,
  }
}