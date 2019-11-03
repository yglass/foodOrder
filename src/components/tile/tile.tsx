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

    render() {
        return (
            <div>
                <p>{this.pizzaTitle}</p>
            </div>
        );
    }
}
