import React from 'react';
import ReactDOM from 'react-dom';
import PersonalWebsite from './PersonalWebsite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PersonalWebsite />, document.getElementById('app'));
registerServiceWorker();
