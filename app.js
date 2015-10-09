/*
*
*MODULE DEPENDENCIES
*
*/

import React from 'react';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

//5s actualice
setInterval(()=>{
	ImageActions.fetchList();
},5000);

React.render(<ImageGrid />,
	document.getElementById('container')
);