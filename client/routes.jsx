import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout.jsx';
import Clock from './containers/clock.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (
          <div>
            <Clock timestamp={true}/>
            <Clock />
          </div>
        )
    });
  }
});
