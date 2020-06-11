import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, LinkNavigation } from './styles';

import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';

import logo from '../../assets/logoHeader.svg';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const { pathname } = history.location;

  return (
    <Container>
      <img src={logo} alt="Logo fastfeet" />

      <nav>
        <LinkNavigation to="/orders" selected={pathname.includes('/orders')}>
          Encomendas
        </LinkNavigation>

        <LinkNavigation
          to="/deliverymen"
          selected={pathname.includes('/deliverymen')}
        >
          Entregadores
        </LinkNavigation>

        <LinkNavigation
          to="/recipients"
          selected={pathname.includes('/recipients')}
        >
          Destinatários
        </LinkNavigation>

        <LinkNavigation
          to="/problems"
          selected={pathname.includes('/problems')}
        >
          Problemas
        </LinkNavigation>
      </nav>

      <aside>
        <span>{user && user.name}</span>

        <button type="button" onClick={() => dispatch(signOut())}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
