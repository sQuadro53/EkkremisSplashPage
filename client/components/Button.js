import React from 'react';
import '../styles/button.css';

// interface Props {        FREEEEEEEEEEEEEEEEEEE
//   className: string;
//   children?: React.ReactNode;
//   onClick?: () => void; //might want to remove the '?' if the button will have functionality
// }

const Button = ({ 
    className,
    children,
    onClick
  }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{children}</button>  
    </div>
  )
}

export default Button;