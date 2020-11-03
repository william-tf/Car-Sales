import React from 'react';
import { useDispatch } from 'react-redux'


const AddedFeature = props => {
const dispatch = useDispatch()

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> dispatch(props.removeFeature(props.feature.id))} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
