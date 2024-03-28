import React from 'react';

const Content = (props) => {
return (
    <div style={{ textAlign: 'left' }}>
        <h3 className='title'>{props.title}</h3>
        <p className='content_text'>{props.content}</p>
    </div>
);
}
  
export default Content;
  