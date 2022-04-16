import React from "react";
import {Tabs} from "antd";
import ItemPart from "./itemPart";

const {TabPane} = Tabs;

export default function Courses(props) {
    if (!props.data.courses) {
        props.data.courses = []
    }

    return (
        <div>
            <div>{props.data.name}</div>
            <div>{props.data.date}</div>
            <div>{props.data.weekday}</div>
            <div>
                {
                    props.data.courses.map(
                        (course, idx) =>
                            <Tabs key={idx} defaultActiveKey="1">
                                <TabPane>
                                    <div>{course.type}, {course.name}</div>
                                    {
                                        course.items.map(
                                            (ci, idx) =>
                                                <ItemPart key={idx + 1} data={ci}/>
                                        )
                                    }
                                </TabPane>
                            </Tabs>
                    )
                }
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
