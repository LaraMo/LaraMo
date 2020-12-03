import React from 'react';

export default class IconsHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
    };
  }

  render() {
    return (
      <img onMouseOut={() => this.setState({img: this.props.img})} alt={this.props.alt} onMouseOver={() => this.setState({img : this.props.hoverImg})}  id={this.props.id} src={this.state.img}/>
    );
  }
}
