import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '../../../services/api';
import colorIterator from '../../../utils/colorIterator';

import { WhiteBox, AvatarInput, TextInput } from './styles';

import DefaultContainer from '../../../components/DefaultContainer';
import DefaultSubHeader from '../../../components/DefaultSubHeader';
import DefaultButton from '../../../components/DefaultButton';
import Avatar from '../../../components/AvatarGenerator';

function EditDeliveryman({ history }) {
  const { deliveryman } = history.location.state;
  const colors = colorIterator();

  const [deliverymanAvatar, setDeliverymanAvatar] = useState({});
  const [previewAvatar, setPreviewAvatar] = useState(
    deliveryman.avatar_id && deliveryman.avatar.url
  );
  const [deliverymanName, setDeliverymanName] = useState(deliveryman.name);
  const [deliverymanEmail, setDeliverymanEmail] = useState(deliveryman.email);
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

    if (deliverymanAvatar) {
      data.append('file', deliverymanAvatar);
    }

    data.append('name', deliverymanName);

    if (deliverymanEmail !== deliveryman.email) {
      data.append('email', deliverymanEmail);
    }

    await api.put(`/deliverymen/${deliveryman.id}`, data);
    return history.goBack();
  }

  return (
    <DefaultContainer>
      <div>
        <DefaultSubHeader>
          <h1>Edição de entregadores</h1>

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

            {previewAvatar ? (
              <img src={previewAvatar} alt="Preview avatar" />
            ) : (
              <Avatar
                name={deliveryman.name}
                colors={colors()}
                size={148}
                fontSize={66}
              />
            )}
          </AvatarInput>

          <TextInput error={nameError}>
            <span>Nome</span>

            <input
              type="text"
              name="name"
              value={deliverymanName}
              onChange={(e) => setDeliverymanName(e.target.value)}
            />
          </TextInput>

          <TextInput error={emailError}>
            <span>Email</span>

            <input
              type="email"
              name="email"
              value={deliverymanEmail}
              onChange={(e) => setDeliverymanEmail(e.target.value)}
            />
          </TextInput>
        </WhiteBox>
      </div>
    </DefaultContainer>
  );
}

EditDeliveryman.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        deliveryman: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          avatar_id: PropTypes.number,
          avatar: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
};

export default EditDeliveryman;
