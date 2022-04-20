import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Tabs} from "antd";
import Segment from "../components/Segment";
import CONSTANTS from "../config";

const {TabPane} = Tabs;

export default function Main(props) {

    let params = useParams();
    const [data, setData] = useState({items: []});

    useEffect(
        () =>
            fetch(`${CONSTANTS.root}/api/courses/${params.pageId}.json`)
                .then(resp => resp.json())
                .then(json => setData(json)),
        [params.pageId]
    );

    return (
        <div>
            <div>
                <h3>
                    {data.date}
                    <span style={{fontSize: "smaller", marginLeft: "1rem"}}>({data.weekday})</span>
                </h3>
                <div>
                    <Tabs defaultActiveKey="1">{
                        data.items.map(
                            (item, idx) =>
                                <TabPane tab={item.name} key={idx}>{
                                    item.segments.map((ci, idx) =>
                                        <Segment key={idx + 1} data={ci}/>
                                    )
                                }</TabPane>
                        )
                    }</Tabs>
                </div>
            </div>
        </div>
    )
}
