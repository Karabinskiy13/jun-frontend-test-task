import "./Horse.css";

export default function Horse(props) {
    return (
        <div className="track">
            <div className="horse" style={{ left: props.distance }}>
                <img
                    src={require(`../../Assets/${props.index}.svg`).default}
                    alt="horse"
                />
                <div className="horse__name">{props.name}</div>
            </div>
            <div>{props.distance}</div>
        </div>
    );
}
