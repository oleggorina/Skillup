export const FORM_ROLES: string[] = ['Гость', 'Модератор', 'Администратор']

export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Возраст',
  site: 'Сайт',
  role: 'Роль'
}

export const FORM_PLACEHOLDER = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Введите email...',
  age: 'Введите возраст...',
  site: 'Введите адрес сайта...',
  role: 'Введите роль из списка...'
}

export const FORM_SUCCESS = {
  name: 'Принято',
  password: 'Принято',
  email: 'Принято',
  age: 'Принято',
  site: 'Принято',
  role: 'Принято'
}

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
}

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Имя должно содержать минимум 4 символа',
    maxlength: 'Имя должно содержать максимум 15 символов'
  },
  password: {
    required: 'Пароль обязателен',
    minlength: 'Пароль должен содержать минимум 7 символов',
    maxlength: 'Пароль должен содержать максимум 25 символов'
  },
  email: {
    required: 'Email обязателен',
    emailValidator: 'Неправильный формат email адреса'
  },
  age: {
    required: 'Возраст обязателен',
    rangeValidator: 'Значение должно быть числом в диапазоне 18 - 122'
  },
  site: {
    required: 'Сайт обязателен',
    urlNotAllowed: 'Неправильный адрес',
    pending: 'Выполняется проверка...'
  },
  role: {
    required: 'Обязательное поле'
  }
}