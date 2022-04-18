import {Carousel} from 'antd';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '600px',
    textAlign: 'center',
    background: '#364d79',
};

function Home() {
    return (
        <div id="welcome">
            <Carousel autoplay>
                <div>
                    <h1 style={contentStyle}>为往圣继绝学,为万世开太平。</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>君子不器</h1>
                </div>
            </Carousel>
        </div>
    );
}

export default Home;
