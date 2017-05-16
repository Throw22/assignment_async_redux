import React from 'react';
import BookDetails from './BookDetails';

class Modal extends Component {
  render() {
    const modalStyle = {
      position: 'fixed',
      backgroundColor: 'white',
      top: '50%',
      transform: 'translateY(-50%) translateX(50%)',
      border: '2px solid black',
      zIndex: 2,
      padding: '15px',
      width: '400px'
    };

    return (
      <div style={modalStyle}>
        <BookDetails onClick={modalToggle} book={book} error={error} />
      </div>
    );
  }
}

export default Modal;
