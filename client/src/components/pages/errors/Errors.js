import React from 'react'

const Errors = (props) => {
  if(props.errors.length !== 0) {
    return props.errors.map((err) => {
      return <p key={err} style={{color:'red', fontSize:'15px'}}>- {err}</p>;
    });
  }
  return null;
}

export default Errors;