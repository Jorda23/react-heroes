import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ( { publisher }) => {

    const heroes = useMemo( 
        () => getHeroesByPublisher(  publisher ), [  publisher ]
    );
  
    return (
        <ul className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( heroe => (
                    <HeroeCard key={ heroe.id } { ...heroe } />
                ))
            }
        </ul>
    )
}
