import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {useDispatch, useSelector} from 'react-redux'

const App = (props) => {
const state = useSelector((state) => state)
const dispatch = useDispatch()


  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};




// export default connect((state) =>{
//   return{
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     additionalFeatures:state.additionalFeatures

//   }
// }, {})(App);

export default App
