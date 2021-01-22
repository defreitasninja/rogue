import '../css/Board.css';
import React from 'react';

class Board extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = this.props.usedTiles;
    }

    tileKey(x, y) { return y +'_'+ x; }

    tiles()
    {
        let tiles = [];
        let rows;
        
        for(let y = 0; y < 5; y++)
        {
            rows = [];

            for (let x = 0; x < 5; x++)
            {
                const key = this.tileKey(x, y);

                let tile = <div className="tile" key={key}>
                    {(this.state[key] !== undefined) ? this.state[key] : key}
                </div>;

                rows.push(tile);
            }

            tiles.push(rows);
        }

        return tiles;
    }

    render() { return (<div id="board" className="board">{this.tiles()}</div>); }
}

export default Board;