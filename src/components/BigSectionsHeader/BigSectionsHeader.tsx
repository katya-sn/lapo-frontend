import React from 'react';
import './BigSectionsHeader.scss';

type Props = {
  text: string[],
}

export const BigSectionsHeader: React.FC<Props> = ({ text }) => {
  return (
    <div className="big-sections-header">
      <h4 className="big-sections-header__text">{text[0]}</h4>
      <div className="big-sections-header__paws"/>
      <h4 className="big-sections-header__text">{text[1]}</h4>
    </div>
  )
}