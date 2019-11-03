import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <main>
          <dominos-header></dominos-header>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/order/:name' component='app-order' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
