import { PureComponent } from 'react'

class Live2D extends PureComponent {
    render() {
        return (
            <div className="waifu">
                <div className="waifu-tips"></div>
                <canvas id="live2d" width="280" height="250" className="live2d"></canvas>
                <div className="waifu-tool">
                    <span class="fui-eye"></span>
                    <span className="fui-user"></span>
                </div>
            </div>
        )
    }
}

export default Live2D;