import {Component} from "react";
import {Carousel} from 'antd';

const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
};

class Welcome extends Component {
    render() {
        return (
            <div id="welcome">
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>Welcome 1 ~!</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Welcome 2 ~!</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Welcome 3 ~!</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Welcome;
