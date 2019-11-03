import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'dominos-tile',
    styleUrl: 'tile.css'
})
export class Tile {

    @Prop()
    pizzaTitle: string;

    @Prop()
    img: string;

    @Prop()
    price: string;

    @Prop()
    description: string;

    tileClicked(event: MouseEvent) {
        console.log('event', event)
    }

    render() {
        return (
            <div class="tile" onClick={this.tileClicked.bind(this)}>
                <p>{this.pizzaTitle}</p>
            </div>
        );
    }
}
