import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  WhiteBox,
  OrderInfo,
  OrderDate,
  OrderSignature,
} from './styles';

import { closeModal } from '../../store/modules/modal/actions';

function ViewModal() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const order = useSelector((state) => state.modal.order);

  const whiteBoxRef = useRef();

  function handleClickOutside(event) {
    if (whiteBoxRef.current && !whiteBoxRef.current.contains(event.target)) {
      dispatch(closeModal());
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return function cleanUp() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Container isOpen={open}>
      <WhiteBox ref={whiteBoxRef}>
        <OrderInfo>
          <p>Informações da encomenda</p>
          <span>
            {order && order.recipient.street}, {order && order.recipient.number}
          </span>
          <span>
            {order && order.recipient.city} - {order && order.recipient.state}
          </span>
          <span>{order && order.recipient.cep}</span>
        </OrderInfo>

        <OrderDate>
          <p>Datas</p>
          <p>
            Retirada:
            <span>
              {(order && order.start_date) || 'Produto ainda não retirado'}
            </span>
          </p>
          <p>
            Entrega:
            <span>
              {(order && order.end_date) || 'Produto ainda não entregue'}
            </span>
          </p>
        </OrderDate>

        <OrderSignature>
          <p>Assinatura do destinatário</p>
          {(order && order.signature !== null && (
            <img src={order.signature.url} alt="Foto da assinatura" />
          )) || <span>Sem assinatura</span>}
        </OrderSignature>
      </WhiteBox>
    </Container>
  );
}

export default ViewModal;
