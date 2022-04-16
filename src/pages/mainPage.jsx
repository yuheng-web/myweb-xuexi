import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Courses from "../components/courses";
import Notice from "../components/Notice";

export default function MainPage(props) {

    let params = useParams();
    const [data, setData] = useState({type: "notice"});

    useEffect(
        () =>
            fetch('api/courses/' + params.clsId + '.json')
                .then(resp => resp.json())
                .then(json => setData(json)),
        [params.clsId]
    );

    return (
        <div>
            {
                data.type === "notice"
                    ? <Notice data={data}/>
                    : <Courses data={data}/>
            }
        </div>
    )
}
