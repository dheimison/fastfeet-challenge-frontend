import React, { useState, useRef, useEffect } from 'react';
import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container } from './styles';

import TableView from '../../components/TableView';
import AvatarGenerator from '../../components/AvatarGenerator';
import AvatarImage from '../../components/AvatarImage';
import ActionButton from '../../components/ActionButton';

import history from '../../services/history';
import api from '../../services/api';
import colorIterator from '../../utils/colorIterator';

function Deliverymen() {
  const colors = colorIterator();
  const refDropDown = useRef();
  const [showDropDown, setShowDropDown] = useState('');
  const [deliverymen, setDeliverymen] = useState([]);

  function requestAPI(query) {
    if (query) {
      const response = api.get(`/deliverymen/?name=${query}`);
      return response;
    }

    const response = api.get('/deliverymen');
    return response;
  }

  useEffect(() => {
    async function setInitialDeliverymen() {
      const response = await requestAPI();
      setDeliverymen(response.data);
    }

    setInitialDeliverymen();
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

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return function cleanUp() {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  async function handleDeleteDeliveryman(id) {
    if (window.confirm('Você realmente quer deletar este entregador?')) {
      await api.delete(`/deliverymen/${id}`);
      const response = await requestAPI();
      setDeliverymen(response.data);
    }
  }

  function debounce() {
    let time = null;

    return function handleTimeout(event, wait = 1000) {
      clearTimeout(time);

      const { value } = event.target;

      time = setTimeout(async () => {
        const response = await requestAPI(value);
        return setDeliverymen(response.data);
      }, wait);
    };
  }
  const handleQueryInput = debounce();

  return (
    <Container>
      <div>
        <h1>Gerenciando entregadores</h1>
        <div>
          <label htmlFor="search">
            <MdSearch size={24} color="#999999" />
            <input
              type="text"
              name="search"
              placeholder="Buscar por entregadores"
              onChange={handleQueryInput}
            />
          </label>

          <button
            type="button"
            onClick={() => history.push('/deliverymen/register')}
          >
            <MdAdd size={24} color="#FFFFFF" />
            Cadastrar
          </button>
        </div>

        <TableView>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymen.map((deliveryman) => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>

                <td>
                  {deliveryman.avatar_id ? (
                    <AvatarImage image={deliveryman.avatar.url} />
                  ) : (
                    <AvatarGenerator
                      name={deliveryman.name}
                      colors={colors()}
                      size={35}
                      fontSize={16}
                    />
                  )}
                </td>

                <td>{deliveryman.name}</td>

                <td>{deliveryman.email}</td>

                <td>
                  <ActionButton miniDropDownHeight={90}>
                    <div>
                      <div>
                        <button
                          type="button"
                          onClick={() => handleDropDownMenu(deliveryman.id)}
                        >
                          <MdMoreHoriz size={24} color="#c6c6c6" />
                        </button>
                      </div>

                      {showDropDown === deliveryman.id && (
                        <ul ref={refDropDown}>
                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                history.push('/deliverymen/edit', {
                                  deliveryman,
                                })
                              }
                            >
                              <MdCreate size={20} color="#4d85ee" />
                              Editar
                            </button>
                          </li>

                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                handleDeleteDeliveryman(deliveryman.id)
                              }
                            >
                              <MdDeleteForever size={20} color="#de3b3b" />
                              Excluir
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </TableView>
      </div>
    </Container>
  );
}

export default Deliverymen;
