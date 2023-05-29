import "./activites";
import SingaporeMap from './singaporemap.jpg';

const MapComponent = (props) => {

console.log(SingaporeMap)

    return (
        <div className="mapComponentBox">
            <div className="mapImage">
                <img src={SingaporeMap} alt="Singapore Map"/>

            </div>
        </div>
    )


};

export default MapComponent;