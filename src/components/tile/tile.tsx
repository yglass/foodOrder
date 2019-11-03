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
            <div class="tile">
                <img class="tile-image"
                     width="600"
                     height="240"
                     onClick={this.tileClicked.bind(this)}
                     src={this.img}
                />
            </div>
        );
    }
}
