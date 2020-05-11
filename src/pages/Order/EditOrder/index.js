import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { createFilter } from 'react-select';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import { Container, Header, Button, WhiteBox } from './styles';

function EditOrder({ history }) {
  const { order } = history.location.state;
  const [recipientId, setRecipientId] = useState(order.recipient.id);
  const [deliverymanId, setDeliverymanId] = useState(order.deliveryman.id);
  const [productName, setProductName] = useState(order.product);

  async function loadOptions(pathSelected) {
    const requestLoaded = await api.get(`/${pathSelected}`);

    const formattedRequest = requestLoaded.data.map((requestPerson) => {
      return {
        value: requestPerson.id,
        label: requestPerson.name,
      };
    });
    return formattedRequest;
  }

  async function submitChanges() {
    await api.put(`/orders/${order.id}`, {
      recipient_id: recipientId,
      deliveryman_id: deliverymanId,
      product: productName,
    });

    history.goBack();
  }

  return (
    <Container>
      <div>
        <Header>
          <h1>Edição de encomendas</h1>
          <nav>
            <Button
              type="button"
              color="#cccccc"
              onClick={() => history.goBack()}
            >
              <MdKeyboardArrowLeft size={24} color="#fff" />
              Voltar
            </Button>
            <Button type="button" color="#7d40e7" onClick={submitChanges}>
              <MdDone size={24} color="#fff" />
              Salvar
            </Button>
          </nav>
        </Header>

        <WhiteBox>
          <div>
            <label>
              <span>Destinatário</span>
              <AsyncSelect
                defaultInputValue={order.recipient.name}
                loadOptions={() => loadOptions('recipients')}
                defaultOptions
                onChange={(e) => setRecipientId(e.value)}
                filterOption={createFilter()}
                styles={{
                  control: (base) => ({ ...base, height: 45, color: 'red' }),
                  menu: (base) => ({ ...base, color: '#999999', fontSize: 16 }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#999999',
                    fontSize: 16,
                  }),
                }}
              />
            </label>
            <label>
              <span>Entregador</span>
              <AsyncSelect
                defaultInputValue={order.deliveryman.name}
                loadOptions={() => loadOptions('deliverymen')}
                defaultOptions
                onChange={(e) => setDeliverymanId(e.value)}
                filterOption={createFilter()}
                styles={{
                  control: (base) => ({ ...base, height: 45, color: 'red' }),
                  menu: (base) => ({ ...base, color: '#999999', fontSize: 16 }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#999999',
                    fontSize: 16,
                  }),
                }}
              />
            </label>
          </div>

          <label>
            <span>Nome do produto</span>
            <input
              type="text"
              defaultValue={order.product}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
        </WhiteBox>
      </div>
    </Container>
  );
}

EditOrder.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
    location: PropTypes.shape({
      state: PropTypes.shape({
        order: PropTypes.shape({
          product: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          recipient: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
          }).isRequired,
          deliveryman: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
          }).isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default EditOrder;
