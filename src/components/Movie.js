import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px',
  minWidth: '200px'
};
const style2 = {
  fontSize: '14px'
};
const style3 = {
  width: '100%',
  minWidth: '150px'
};
export default ({ movie: { title, images, _id } }) => {
  return (
    <div style={ styles }>
      <div><img style={style3} alt={images[0].owner} src={images[0].url} /></div>
      <h6 style2={ style2 }>{ title }</h6>
    </div>
  );
};