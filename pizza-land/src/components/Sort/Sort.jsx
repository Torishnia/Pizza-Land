import { useState } from 'react';

import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './sort.module.sass';

export default function Sort({ value, onChangeSort }) {
  const [open, setOpen] = useState(false);

  const sortName = [
    { name:'popularity (DESC)', sortProperty: 'rating' },
    { name:'popularity (ASC)', sortProperty: '-rating' },
    { name: 'price (DESC)', sortProperty: 'price' },
    { name: 'price (ASC)', sortProperty: '-price' },
    { name: 'alphabet', sortProperty: 'title' },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  }

  return (
    <div className={styles.sort}>
      <div className={styles.sort_label}>
        {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown/>}
        <b>Sorted by:</b>
        <span onClick={() => setOpen(!open)} >{value.name}</span>
      </div>
      {open && <div className={styles.sort_popul}>
        <ul>
          {sortName.map((obj, i) => 
            <li 
              key={i} 
              onClick={() => onClickListItem(obj)}
              className={value.sortProperty === obj.sortProperty ? styles.active : ''}
            >
              {obj.name}
            </li>
          )}
        </ul>
      </div>}
    </div>
  )
}
