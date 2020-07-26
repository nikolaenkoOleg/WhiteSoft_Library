import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('.modal');

class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add('modal__body');
  }

  componentDidMount() {
    modalRoot.classList.remove('modal-hide');
    modalRoot.classList.add('modal-show');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.classList.remove('modal-show');
    modalRoot.classList.add('modal-hide');
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default Portal;
