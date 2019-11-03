import { Component, h } from '@stencil/core';

@Component({
  tag: 'dominos-header',
  styleUrl: 'header.css'
})
export class HeaderComponent {

  render() {
    return [
      <div>
        <img class="header-logo" src="/assets/icon/logo.png" title='Dominos mini app' alt='Dominos mini app'></img>
      </div>
    ];
  }
}
