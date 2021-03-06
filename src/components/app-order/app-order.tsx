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
          <h2>
            Your "{this.normalize(this.match.params.name)}" Pizza has been ordered, and will arrive at the time the game starts.
          </h2>

          <img src="/assets/images/tracker.png" alt="Dominos Pizza Tracker"/>
        </div>
      );
    }
  }
}
