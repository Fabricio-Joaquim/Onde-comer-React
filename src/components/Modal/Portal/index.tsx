import ReactDOM from 'react-dom';

const PortalModal = ({ children }:Element) => {
  const portal:any = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
};

export default PortalModal;
