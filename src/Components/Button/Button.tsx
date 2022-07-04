import React from 'react';
import './Button.css';

function Button() {

  const [popupIsOpen, setPopupIsOpen] = React.useState(false);

  const handleClick = () => {
    setPopupIsOpen(!popupIsOpen);
  }

  const classList = popupIsOpen ? 'popup popup__open' : 'popup';

  return (
    <div>

      <button className="toc__hamburger js-hamburger" onClick={handleClick}>
        <span className="toc__hamburger-box">
          <span className="toc__hamburger-inner"></span>
        </span>
        <div className="toc__hamburger-label">Меню</div>
      </button>

      <div className={classList}>
        Контент
      </div>


    </div>

  );
}

export default Button;
