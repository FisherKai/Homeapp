import { PureComponent } from 'react';
import Live2D from '../../components/Live2D/index';
import { Menu, Switch, Avatar, Image } from 'antd';

const imageUrl = require('../../asset/image/Avatar.jpg');
console.log('imageUrl', imageUrl)
const { SubMenu } = Menu;

class Home extends PureComponent {
    state = {
        theme: 'dark',
    }

    handleClick = e => {
        console.log('click ', e);
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
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
                    <Avatar className="home-u-avatar"
                        src={<Image src={imageUrl.default} />}
                    />
                    <SubMenu key="sub1" title="Navigation One">
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                    <Switch
                        className="home-meun-change-theme"
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </Menu>
                {/* Live2D看板娘 */}
                <Live2D></Live2D>
            </div>
        )
    }
}

export default Home;