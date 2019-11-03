import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/profile/2 TOPPING PIZZAS'>
          <dominos-tile pizza-title="2 TOPPING PIZZAS" img="" price="7.99$" description="2 TOPPING PIZZAS">
          </dominos-tile>
        </stencil-route-link>
      </div>
    );
  }
}
