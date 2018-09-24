// import _ from 'lodash';
 import './style.css';
// import Icon from './icon.png';
// import printMe from './print.js'

// function component(){
	// var element = document.createElement('div');
	// var btn = document.createElement('button');
	
	// element.innerHTML = _.join(['Hello', 'webpack', '我是coder'], ' ');
	// element.classList.add('hello');
	
	// var myIcon = new Image();
	// myIcon.src = Icon;
	
	// element.appendChild(myIcon);
	
	// btn.innerHTML = 'click it';
	// btn.onclick = printMe;
	
	// element.appendChild(btn);
	
	// return element;
// }


// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
	// module.hot.accept('./print.js', function(){
		// console.log('Accepting the updated printMe module!');
		// document.body.removeChild(element);
		// element = component();
		// document.body.appendChild(element);
	// });
// }

import _ from 'lodash';
function component(){
		var element = document.createElement('div');
		var btn = document.createElement('button');
		
		element.innerHTML = _.join(['Hello', 'webpack', '我是coder'], ' ');
		btn.innerHTML = 'click it';
		element.classList.add('hello');
		element.appendChild(btn);
		
		btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
			var print = module.default;
			print();
		});
		return element;
}

// getComponent().then(component => {
	// document.body.appendChild(component);
// })
document.body.appendChild(component());



