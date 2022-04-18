import React from "react";
import {Tabs} from "antd";
import Segment from "./Segment";

const {TabPane} = Tabs;

export default function Courses(props) {
    if (!props.data.courses) {
        props.data.courses = []
    }

    return (
        <div>
            <h1>
                {props.data.name}
                <span style={{fontSize: "small", marginLeft: "1rem"}}>{props.data.date} / {props.data.weekday}</span>
            </h1>
            <div>
                <Tabs defaultActiveKey="1">{
                    props.data.courses.map(
                        (course, idx) =>
                            <TabPane tab={course.name} key={idx}>{
                                course.items.map((ci, idx) =>
                                    <Segment key={idx + 1} data={ci}/>
                                )
                            }</TabPane>
                    )
                }</Tabs>
            </div>
            {/*
            <Popconfirm title={"Title"}
                        onConfirm={this.confirm.bind(this)}
            >
                <Button>删除</Button> {typeof (dayTab.x)}
            </Popconfirm>
            */}
        </div>
    );
}
