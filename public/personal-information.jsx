import React from 'react'
import {Link} from 'react-router';

class InformModule extends React.Component {
    render() {
        return (
            <div class="container" id="outermost">
                <h2>个人信息</h2>
                <form role="form" action="https://www.taobao.com/" method="get">
                    <div className="form-group">
                        <label htmlFor="e-mail">邮箱</label>
                        <input type="email" className="form-control" id="e-mail" placeholder="请输入电子邮箱"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobilePhone">手机号码</label>
                        <input type="tel" className="form-control" id="mobilePhone" placeholder="请输入手机号码"
                               pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-default"><Link to="/homePage">提交</Link></button>
                        <button type="button" className="btn btn-default">修改</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InformModule;
