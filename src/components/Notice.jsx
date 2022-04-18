import Segment from "./Segment";

export default function Notice(props) {


    if(undefined === props.data.items) {
        props.data.items = [];
    }

    return (
        <div>
            <h2>{props.data.name}
                <span style={{fontSize: "small", marginLeft: "1rem"}}>{props.data.date} / {props.data.weekday}</span>
            </h2>
            {
                props.data.items.map((value, idx) => <Segment key={idx} data={value}/>)
            }
        </div>
    );
}
