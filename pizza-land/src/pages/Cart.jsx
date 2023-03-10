import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import pizzaSlider_1 from '../assets/image/pizza_slider_1.png';
import styles from './cart.module.sass';

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>

        <div className={styles.container_header_cart}>
          <div><HiOutlineShoppingCart size={23} /></div>
          <h2>Cart</h2>
        </div>

        <div className={styles.container_header_trash}>
          <div><HiOutlineTrash size={22} /></div>
        </div>

      </div>
      <div className={styles.container_content}>

        <div className={styles.container_content_item}>
          <img src={pizzaSlider_1} alt='Pizza'/>
          <div className={styles.container_content_item_description}>
            <h4>Title</h4>
            <span>thin dough 26 cm</span>
          </div>
        </div>

        <div className={styles.container_content_amount}>
          <button><AiOutlineMinusCircle size={20} /></button>
          <span>2</span>
          <button><AiOutlinePlusCircle size={20}/></button>
        </div>

        <div className={styles.container_content_price}>20 $</div>

        <div className={styles.container_content_remove}>
          <button><TiDeleteOutline size={25} /></button>
        </div>

      </div>
      <div className={styles.container_totalOrders}>
        <span>Pizzas: <b>2</b></span>
        <span>Total: <b>40 $</b></span>
      </div>

      <div className={styles.container_footer}>
        <Link to='/'>
          <button className={styles.container_footer_back}>&larr; Go back</button>
        </Link>
        <button className={styles.container_footer_pay}>Pay</button>
      </div>
    </div>
  )
}
