import React, { PropTypes } from 'react';
import './style.less'

const propTypes = {
  
};

function CreateBar() {
  return (
    <a href="#" className="list-group-item create-bar-component">
      + 创建新的文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
