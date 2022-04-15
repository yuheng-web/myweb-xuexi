import {Alert} from "antd";
import {instanceOf} from "prop-types";

export default function ItemPart(props) {

    if(!props.data) {
        return (<p>"No props.data"</p>);
    }

    switch (props.data.type) {

        case 'link':// 超链接
            return (
                <p><a href={props.data.url} target="_blank">{props.data.info}</a></p>
            );
            break;

        case 'image':// 图片
            let imgStyle = {
                width: "70%", margin: "20px"
            };

            return (
                <p>
                    {
                        (!!props.data.title)
                            ? <h3 style={imgStyle}>{props.data.title}</h3>
                            : ''
                    }
                    <img src={props.data.url} style={imgStyle}/><br/>
                    <span style={{fontStyle:"italic", fontSize:"smaller", color:"lightgrey"}}>{props.data.del}</span>
                </p>
            );
            break;
        case 'msg':// 消息
            return (
                <div style={{margin:'0.5rem'}}>
                    <h4>{props.data.info}</h4>
                    <ol>
                        {
                            props.data.lines.map((v,idx)=><li key={idx}>{v}</li>)
                        }
                    </ol>
                </div>
            );
            break;
        case 'title':// 标题
            return (<Alert message={props.data.info} type="success"></Alert>)
            break;
        default:
            let json = JSON.stringify(props);
            return (<p>{json}</p>);
            break;
    }
}