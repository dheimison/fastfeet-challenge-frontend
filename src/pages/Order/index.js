import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { openModalRequest } from '../../store/modules/modal/actions';

import { Container, Status, ModalButton, MiniModal, Action } from './styles';

import Avatar from '../../components/AvatarGenerator';

import colorIterator from '../../utils/colorIterator';

export default function Order() {
  const dispatch = useDispatch();
  const refDropDown = useRef();

  const colors = colorIterator();

  const [showDropDown, setShowDropDown] = useState('');
  const [orders, setOrders] = useState([]);

  function dataTransform(oldData) {
    if (oldData.length === 0) {
      const newData = ['empty'];
      return newData;
    }

    const newData = oldData.map((order) => {
      if (order.canceled_at !== null) {
        order.status = 'cancelada';
      } else if (order.end_date !== null) {
        order.status = 'entregue';
      } else if (order.start_date !== null) {
        order.status = 'retirado';
      } else {
        order.status = 'pendente';
      }

      return order;
    });

    return newData;
  }

  function requestAPI(query) {
    if (query) {
      const response = api.get(`/orders/?order=${query}`);
      return response;
    }

    const response = api.get('/orders');
    return response;
  }

  useEffect(() => {
    async function setInitialOrders() {
      const response = await requestAPI();
      const data = dataTransform(response.data);
      setOrders(data);
    }

    setInitialOrders();
  }, []);

  function handleDropDownMenu(id) {
    if (showDropDown !== '') {
      setShowDropDown('');
    } else if (id) {
      setShowDropDown(id);
    }
  }

  function handleClickOutside(event) {
    if (refDropDown.current && !refDropDown.current.contains(event.target)) {
      handleDropDownMenu();
    }
  }

  function handleViewButton(order) {
    setShowDropDown('');
    dispatch(openModalRequest(order));
  }

  async function handleDeleteOrder(id) {
    if (window.confirm('Você realmente quer deletar esta encomenda?')) {
      await api.delete(`/orders/${id}`);
      const response = await requestAPI();
      const data = dataTransform(response.data);
      setOrders(data);
    }
  }

  function debounce() {
    let time = null;

    return function handleTimeout(event, wait = 1000) {
      clearTimeout(time);

      const { value } = event.target;

      time = setTimeout(async () => {
        const response = await requestAPI(value);
        const data = dataTransform(response.data);
        return setOrders(data);
      }, wait);
    };
  }
  const handleQueryInput = debounce();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return function cleanUp() {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <Container>
      <div>
        <h1>Gerenciando encomendas</h1>
        <div>
          <label htmlFor="search">
            <MdSearch size={24} color="#999999" />
            <input
              type="text"
              name="search"
              placeholder="Buscar por encomendas"
              onChange={handleQueryInput}
            />
          </label>

          <button
            type="button"
            onClick={() => history.push('/orders/register')}
          >
            <MdAdd size={24} color="#FFFFFF" />
            Cadastrar
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {orders[0] === 'empty' ? (
              <tr>
                <td style={{ width: '100%', maxWidth: 'none' }}>
                  Nenhuma encomenda encontrada
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>

                  <td>{order.recipient.name}</td>

                  <td style={{ textAlign: 'initial' }}>
                    <Avatar
                      name={order.deliveryman.name}
                      colors={colors()}
                      size={35}
                      fontSize={16}
                    />
                    <span>{order.deliveryman.name}</span>
                  </td>

                  <td>{order.recipient.city}</td>

                  <td>{order.recipient.state}</td>

                  <td>
                    <Status status={order.status}>{order.status}</Status>
                  </td>

                  <td>
                    <Action>
                      <ModalButton
                        type="button"
                        onClick={() => handleDropDownMenu(order.id)}
                      >
                        <MdMoreHoriz size={24} color="#c6c6c6" />
                      </ModalButton>

                      {showDropDown === order.id && (
                        <MiniModal ref={refDropDown}>
                          <li>
                            <button
                              type="button"
                              onClick={() => handleViewButton(order)}
                            >
                              <MdVisibility size={20} color="#8e5be8" />
                              Visualizar
                            </button>
                          </li>

                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                history.push('/orders/edit', { order })
                              }
                            >
                              <MdCreate size={20} color="#4d85ee" />
                              Editar
                            </button>
                          </li>

                          <li>
                            <button
                              type="button"
                              onClick={() => handleDeleteOrder(order.id)}
                            >
                              <MdDeleteForever size={20} color="#de3b3b" />
                              Excluir
                            </button>
                          </li>
                        </MiniModal>
                      )}
                    </Action>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
