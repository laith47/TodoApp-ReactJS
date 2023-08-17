import React from 'react';
// import PropTypes from 'prop-types';
// import { MaterialButtonWrapper } from './MaterialButton.styled';

function MaterialButton({ type, color, functionName, additonalClass }) {

   return (
      <button
         className="material-symbols-outlined"
         onClick={functionName}
         style={{ color: color }}>
         {type}
      </button>
   )
}
;
MaterialButton.propTypes = {};

MaterialButton.defaultProps = {};

export default MaterialButton;
