import React,{Component} from 'react';
import RouteMap from './map';
import RouteConfig from './routes';

class RouterView extends Component{
	render(){
		const {routes}=this.props;
		return <RouteMap routes={routes ? routes:RouteConfig}></RouteMap>
	}
}
export default RouterView;