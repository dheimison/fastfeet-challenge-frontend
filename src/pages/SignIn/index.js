import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Label } from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validationError(schema) {
    try {
      schema.validateSync({ email, password }, { abortEarly: false });
    } catch (error) {
      error.inner.forEach((erro) => {
        switch (erro.path) {
          case 'email':
            setEmailError(erro.message);
            break;
          case 'password':
            setPasswordError(erro.message);
            break;
          default:
            break;
        }
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string()
        .required('O email é obrigatório')
        .email('Email inválido'),
      password: Yup.string()
        .min(6, 'A senha deve conter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    });

    if (!schema.isValidSync({ email, password })) {
      setEmailError('');
      setPasswordError('');
      validationError(schema);
      return;
    }

    setEmailError('');
    setPasswordError('');

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo fastfeet" />

        <form onSubmit={handleSubmit}>
          <Label htmlFor="email" error={emailError}>
            Seu E-mail
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>

          <Label htmlFor="password" error={passwordError}>
            Sua Senha
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </form>
      </div>
    </Container>
  );
}
