import React from 'react';
import PropTypes from 'prop-types';

import { Table } from './styles';

function TableView({ children }) {
  return <Table>{children}</Table>;
}

TableView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TableView;
