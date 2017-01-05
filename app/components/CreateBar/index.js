import React, { PropTypes } from 'react';
import './style.less';

const propTypes = {
	onClick: PropTypes.func.isRequired,
};

function CreateBar({onClick}) {
	return (
		<a href="javascript:;" onClick={onClick}  className="list-group-item create-bar-component">
			+ 创建新的文章
		</a>
	);
}

CreateBar.propTypes = propTypes;

export default CreateBar;
