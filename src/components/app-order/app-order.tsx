import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-order',
  styleUrl: 'app-order.css',
  shadow: true
})
export class AppOrder {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-order">
          <p>
            Your "{this.normalize(this.match.params.name)}" has been ordered.
          </p>
        </div>
      );
    }
  }
}
