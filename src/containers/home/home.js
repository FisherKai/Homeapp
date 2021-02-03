import { PureComponent } from 'react';
import Live2D from '../../components/Live2D/index';
import { routerRedux } from 'dva/router';
import { Menu, Image } from 'antd';
import { connect } from 'dva';
import Myinfo from '../myinfo/myinfo';

const imageUrl = require('../../asset/image/Avatar.jpg');


class Home extends PureComponent {
    state = {
        theme: 'dark',
        menuList: []
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'home/fetchMenu',
            payload: {},
        });
    }

    handleClick = e => {
        console.log('click ', e);
        e.key && (location.href = e.key);
    };

    render() {
        console.log(this.props)
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {/* 菜单栏 */}
                <Menu
                    onClick={this.handleClick}
                    style={{ width: '15%', height: '100%', position: 'fixed' }}
                    mode="inline"
                    theme={this.state.theme}
                >
                    <Image src={imageUrl.default} className="home-u-avatar" />
                    {
                        this.props.home.menuList.map((e) => {
                            return (
                                <Menu.Item key={e.meunurl}>
                                    {e.meunname}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>

                {/* 容器 */}
                {/* <div style={{ width: '85%', height: '100%', position: 'fixed', right: '0' }}>
                    <myinfo></myinfo>
                </div> */}
                <div style={{ width: '85%', height: '100%', position: 'fixed', right: '0' }}>
                    <Myinfo ></Myinfo>
                </div>

                {/* Live2D看板娘 */}
                <Live2D></Live2D>
            </div>
        )
    }
}
export default connect(({ home }) => ({
    home,
}))(Home);