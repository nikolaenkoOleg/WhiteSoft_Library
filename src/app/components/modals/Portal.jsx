import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('.modal');

class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default Portal;
