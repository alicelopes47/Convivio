import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import './RegularCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    height: string;
}


export const RegularCard = ({
    height,
    }: Props
    ) => {
  return (
    <div className="regular-card" style={{height}}>
        <FontAwesomeIcon className='icon' icon={faSkullCrossbones} size='2x'/>
        <h1>Cards</h1>
        <p>Descrição do card </p>
    </div>
  );
}