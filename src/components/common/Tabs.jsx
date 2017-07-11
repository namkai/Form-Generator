import React from 'react';
import { Link } from 'react-router-dom';

export const Tabs = (props) => (
	<div className="row" style={{ marginTop: '10px' }}>
		<div className="col s12">
			<ul className="tabs">
				<li className="tab col s4"><Link className="active" to="/create">Create</Link></li>
				<li className="tab col s4"><Link to="/export">Export</Link></li>
				<li className="tab col s4"><Link to="/preview">Preview</Link></li>
			</ul>
		</div>
	</div>
);

export default Tabs;

