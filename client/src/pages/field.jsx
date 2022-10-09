import React from 'react';
import PoketmonField from '../components/PokemonField';

import style from './page.module.scss';

const Field = () => {
    return (
        <div className={style.Page}>
            <PoketmonField></PoketmonField>
        </div>
    );
}

export default Field;
