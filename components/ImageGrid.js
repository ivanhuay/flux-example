/*
*
*Module Dependencies
*
*/

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
	
	mixins:[Reflux.connect(ImageStore, 'imagestore')],

	render:function(){

		if(this.state.imagestore){
			let imageNodes = this.state.imagestore.map((image)=>{
				return <div className="image">
					<a href={image.link} >
						<img src={image.media.m} />
					</a>

				</div>
			});
			return <div>{imageNodes}</div>
		}else{
			return <p>No hay imagenes disponibles!</p>
		}
	}
});

export default ImageGrid;
