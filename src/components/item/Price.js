import React from 'react';

const Price = (props) => {
  const static_data = props.static_data;
  const buy_price = static_data['shop']['prices']['total'];
  const sell_price = static_data['shop']['prices']['sell'];

  return (
    <>
      <div id='item-price-title'>
      </div>
      <div id="item-price">
        <div id="item-price-buy">
          <div>BUY</div>
          <div>
            <img id="item-price-buy-img" src='../images/compressed/gold_coin.webp' alt="Buy Price" />
            {buy_price}
          </div>
        </div>
        <div id="item-price-sell">
          <div>SELL</div>
          <div>
            {sell_price}
            <img id="item-price-sell-img" src='../images/compressed/red_coin.webp' alt="Sell Price" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Price;