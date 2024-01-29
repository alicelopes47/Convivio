import { RegularCard } from "../Cards/RegularCard";
import './CardGrid.scss';

export const CardGrid = () => {
    return (
        <div className="card-grid-container layout">
            <div className="card-grid-content">
                <RegularCard height="200px" />
                <RegularCard height="200px" />
                <RegularCard height="200px" />
                <RegularCard height="200px" />
                <RegularCard height="200px" />
                <RegularCard height="200px" />
            </div>
        </div>
    );
}