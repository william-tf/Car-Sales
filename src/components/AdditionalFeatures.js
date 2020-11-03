import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {useSelector} from 'react-redux'
import {addFeature} from '../actions'

const AdditionalFeatures = props => {
const additionalFeatures = useSelector((state) => state.additionalFeatures)


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} /*addFeature={state.addFeature}*/ />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// const mapState = (state) => {
//   return {
//     additionalFeatures:state.additionalFeatures
    
//   }
// }

//export default connect(mapState, {addFeature}) (AdditionalFeatures);
export default AdditionalFeatures