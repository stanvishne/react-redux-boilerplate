import React from 'react';
import { Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import NsiSelector from './../../components/common/NsiSelector';

const mapStateToProps = ({ nsi }) => {
	return{ nsi }
};


@connect(mapStateToProps)
class Report1 extends React.Component {
	render() {
		return(
			<div className="report">
				<Label>Отчет 1</Label>
				<br/>
				<NsiSelector placeholder="Выберите станцию" nsi={this.props.nsi.dnet} />
				<br/>
				<NsiSelector placeholder="Выберите груз" nsi={this.props.nsi.cargo} />
			</div>
		);
	}
}

export default Report1;