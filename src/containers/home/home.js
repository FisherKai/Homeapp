import { PureComponent } from 'react';
import Live2D from '../../components/Live2D/index';
import { Menu, Image } from 'antd';
import { getAllMeun } from '../../api/index';

const imageUrl = require('../../asset/image/Avatar.jpg');

class Home extends PureComponent {
    state = {
        theme: 'dark',
        meunList: []
    }

    componentDidMount() {
        getAllMeun().then(res => {
            console.log(res);
            this.setState({
                meunList: res.data.data
            })
        })
    }

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {/* 菜单栏 */}
                <Menu
                    onClick={this.handleClick}
                    style={{ width: '15%', height: '100%' }}
                    mode="inline"
                    theme={this.state.theme}
                >
                    <Image src={imageUrl.default} className="home-u-avatar" />
                    {
                        this.state.meunList.map((e) => {
                            return (
                                <Menu.Item key={e.id}>
                                    {e.meunname}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                {/* Live2D看板娘 */}
                <Live2D></Live2D>
            </div>
        )
    }
}

export default Home;