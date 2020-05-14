import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Order from '../pages/Order';
import EditOrder from '../pages/Order/EditOrder';
import OrderRegistration from '../pages/Order/OrderRegistration';
import Deliverymen from '../pages/Deliverymen';
import DeliverymanRegistration from '../pages/Deliverymen/DeliverymanRegistration';
import EditDeliveryman from '../pages/Deliverymen/EditDeliveryman';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" exact component={Order} isPrivate />
      <Route
        path="/orders/register"
        exact
        component={OrderRegistration}
        isPrivate
      />
      <Route path="/orders/edit" exact component={EditOrder} isPrivate />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/register"
        exact
        component={DeliverymanRegistration}
        isPrivate
      />
      <Route
        path="/deliverymen/edit"
        exact
        component={EditDeliveryman}
        isPrivate
      />
    </Switch>
  );
}
