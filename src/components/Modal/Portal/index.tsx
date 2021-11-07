import ReactDOM from 'react-dom';

const PortalModal = ({ children }:Element) => {
  const portal = document.getElementById('modal-root') as Element;
  return ReactDOM.createPortal(children, portal);
};

export default PortalModal;
