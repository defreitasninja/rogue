import React from 'react';
import Char from './Char';
import Board from './Board';

class Game extends React.Component
{
    render()
    {
        const usedTiles = {
            '0_0': <Char />,
            '2_4': <Char />
        };

        return (
            <div>
                <Board usedTiles={usedTiles} />
            </div>
        );
    }
}

export default Game;