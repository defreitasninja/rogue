import React from 'react';
import red from '../images/red.png';

class Char extends React.Component
{
    render()
    {
        /*
        const style = {
            backgroundImage: 'url('+ red +')',
            //backgroundPosition: '-690px -200px',
            width: '100px',
            height: '100px',
            border: '1px solid black',
            //position: 'absolute',
            //margin: '19% 48.5%',
            //zIndex: '1',
        };

        return <div style={style}></div>
        */
        return <img src={red} alt="" />;
    }
}

export default Char;