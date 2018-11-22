import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

class RouteMap extends Component{
	render(){
		const {routes}=this.props;
		const defaultRoute=<Route exact key={0} path='/' component={()=>{
			return <Redirect to='/'/>
		}}></Route>
		return <Switch>
			{
				routes.length && routes.map((itm,ind)=>{
					const Com=itm.component;
					const Children=itm.children === undefined ? []:itm.children;
					return <Route path={itm.path} render={(api)=>{
						return <Com routes={Children} {...api}></Com>
					}} key={ind}></Route>
				}).concat([defaultRoute])
			}
		</Switch>
	}
}
export default RouteMap;