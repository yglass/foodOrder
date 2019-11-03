import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/order/Margarita'>
          <dominos-tile pizza-title="Margarita" img="" price="7.99$" description="Large Margarita Pizza">
          </dominos-tile>
        </stencil-route-link>

        <stencil-route-link url='/order/Vegetables'>
          <dominos-tile pizza-title="Vegetables" img="" price="8.99$" description="Large Vegetables Pizza">
          </dominos-tile>
        </stencil-route-link>

        <stencil-route-link url='/order/Chicken'>
          <dominos-tile pizza-title="Chicken" img="" price="9.99$" description="Large Chicken Pizza">
          </dominos-tile>
        </stencil-route-link>
      </div>
    );
  }
}
