import { PureComponent } from 'react';
import Live2D from '../../components/Live2D/index';
import { Menu, Image } from 'antd';

const imageUrl = require('../../asset/image/Avatar.jpg');

class Home extends PureComponent {
    state = {
        theme: 'dark',
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
                    <Menu.Item key="sub1">
                        个人信息
                    </Menu.Item>
                    <Menu.Item key="sub2">
                        个人项目演示
                    </Menu.Item>
                    <Menu.Item key="sub3">
                        有趣的东西
                    </Menu.Item>
                </Menu>
                {/* Live2D看板娘 */}
                <Live2D></Live2D>
            </div>
        )
    }
}

export default Home;