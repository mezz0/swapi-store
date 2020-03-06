import React from 'react';
import { Switch } from 'react-router'
import { Route, withRouter } from 'react-router-dom'
import { createStore } from 'easy-peasy'
import { StoreProvider } from 'easy-peasy'
import storeModel from './store'
import Main from './pages/main'
import FOF from './pages/404'


const store = createStore(storeModel)

function App(props) {
  return (
    <StoreProvider store={store}>
    	<div className='App'>
	      <Switch location={props.location}>
	        <Route exact path='/' component={Main} />
	        <Route component={FOF}/>
	      </Switch>    	
    	</div>
    </StoreProvider>
  );
}

export default withRouter(App)
