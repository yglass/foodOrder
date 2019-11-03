import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  componentDidLoad() {
    //WORKAROUND: we use setTimeout because for some reason componentDidLoad lifecycle method is being called too early and the dom is'not interactive yet
    setTimeout(() => {
      document.querySelector('a').focus();
    }, 0)
  }

  render() {
    return [
      <header>
        <h1>Your top recommendations</h1>
      </header>,
      <div class='app-home'>
        <stencil-route-link url='/order/Margarita'>
          <dominos-tile pizza-title="Double Deal Medium"
                        img="/assets/images/unlimited-medium.jpg"
                        price="7.99$"
                        description="Double deal medium pizza 2-toppings pizzas">
          </dominos-tile>
        </stencil-route-link>

        <stencil-route-link url='/order/Vegetables'>
          <dominos-tile pizza-title="Large 3 Toppings"
                        img="/assets/images/double-deal-medium.jpg"
                        price="8.99$"
                        description="Large 3 toppings pizza">
          </dominos-tile>
        </stencil-route-link>

        <stencil-route-link url='/order/Chicken'>
          <dominos-tile pizza-title="Unlimited Medium"
            img="/assets/images/unlimited-medium.jpg"
            price="9.99$"
            description="Unlimited Medium 2 toppings">
          </dominos-tile>
        </stencil-route-link>
      </div>
    ];
  }
}
