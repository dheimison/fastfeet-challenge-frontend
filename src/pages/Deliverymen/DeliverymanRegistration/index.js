import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdDone, MdInsertPhoto } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '../../../services/api';

import { WhiteBox, AvatarInput, TextInput } from './styles';

import DefaultContainer from '../../../components/DefaultContainer';
import DefaultSubHeader from '../../../components/DefaultSubHeader';
import DefaultButton from '../../../components/DefaultButton';

function DeliverymanRegistration({ history }) {
  const [deliverymanAvatar, setDeliverymanAvatar] = useState({});
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [deliverymanName, setDeliverymanName] = useState('');
  const [deliverymanEmail, setDeliverymanEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleInputAvatar(e) {
    if (e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setPreviewAvatar(event.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);

      return setDeliverymanAvatar(e.target.files[0]);
    }

    setDeliverymanAvatar({});
    setPreviewAvatar('');
    return null;
  }

  function validationError(schema) {
    try {
      schema.validateSync(
        { name: deliverymanName, email: deliverymanEmail },
        { abortEarly: false }
      );
    } catch (error) {
      error.inner.forEach((erro) => {
        switch (erro.path) {
          case 'email':
            setEmailError(erro.message);
            break;
          case 'name':
            setNameError(erro.message);
            break;
          default:
            break;
        }
      });
    }
  }

  async function submitDeliveryman() {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string()
        .required('O email é obrigatório')
        .email('Email inválido'),
    });

    if (
      !schema.isValidSync({ name: deliverymanName, email: deliverymanEmail })
    ) {
      setNameError('');
      setEmailError('');
      return validationError(schema);
    }

    setNameError('');
    setEmailError('');

    const data = new FormData();
    data.append('file', deliverymanAvatar);
    data.append('name', deliverymanName);
    data.append('email', deliverymanEmail);
    await api.post(`/deliverymen/`, data);
    return history.goBack();
  }

  return (
    <DefaultContainer>
      <div>
        <DefaultSubHeader>
          <h1>Cadastro de entregadores</h1>

          <nav>
            <DefaultButton
              type="button"
              content="Voltar"
              color="#cccccc"
              onClick={() => history.goBack()}
            >
              <MdKeyboardArrowLeft size={24} color="#fff" />
            </DefaultButton>

            <DefaultButton
              type="button"
              content="Salvar"
              color="#7d40e7"
              onClick={submitDeliveryman}
            >
              <MdDone size={24} color="#fff" />
            </DefaultButton>
          </nav>
        </DefaultSubHeader>

        <WhiteBox>
          <AvatarInput htmlFor="fileInput" preview={previewAvatar}>
            <input
              name="fileInput"
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleInputAvatar}
            />
            <MdInsertPhoto size={50} color="#dddddd" />

            {previewAvatar && <img src={previewAvatar} alt="Preview avatar" />}
          </AvatarInput>

          <TextInput error={nameError}>
            <span>Nome</span>

            <input
              type="text"
              name="name"
              onChange={(e) => setDeliverymanName(e.target.value)}
            />
          </TextInput>

          <TextInput error={emailError}>
            <span>Email</span>

            <input
              type="email"
              name="email"
              onChange={(e) => setDeliverymanEmail(e.target.value)}
            />
          </TextInput>
        </WhiteBox>
      </div>
    </DefaultContainer>
  );
}

DeliverymanRegistration.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default DeliverymanRegistration;
