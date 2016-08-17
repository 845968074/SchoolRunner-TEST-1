import React from 'react';
require('./login.css');

class Login extends React.Component {
    // loginClick() {
    //     let name = $('#inputStuID').val();
    //     let password = $('#         type:'POST',
    //         url:'http://localhost:3000/login',
    //         // async:true,
    //         data:{name: name,password: password},
    //         success: function(result) {
    //             console.log(result);
    //             if(result == "SUCCESS"){
    //                 location.href = '/#/home';
    //             }else if(result == 'personalInfo'){
    //                 location.href = '/#/personalInfoPage';
    //             }
    //         },
    //         error: function (result) {
    //             if(result.responseText == 'NO INFO'){
    //                 alert('NO YOUR INFO');
    //             }else if(result.responseText == 'passwordError'){
    //                 alert('Password Error');
    //             }
    //         }
    //     })
    // }inputPassword').val();
    //     $.ajax({
    //
    loginClick() {
        if ($('#inputStuID')[0].value != '' && $('#inputPassword')[0].value != '') {
            $.ajax({
                url: 'http://api.xiyoumobile.com/xiyoulibv2/user/login',
                type: 'get',
                dataType: 'jsonp',
                data: {
                    username: $('#inputStuID')[0].value,
                    password: $('#inputPassword')[0].value
                }
            })
                .done(function (returnData) {
                        var Session = returnData.Detail;
                        if (Session == 'ACCOUNT_ERROR') {
                            window.location.href = "index.html";
                            alert('该用户不能登录哦(⊙o⊙)');
                        }
                        else
                            // window.location.href = "main.html?session=" + Session;
                            window.location.href = "/#/personalInfoPage";

                    }
                )
                .fail(function () {
                    alert("error");
                })
        } else {
            alert('亲，用户名密码不能为空哦！');
        }
    }

    render() {
        return <div className="container">
            {/*<form className=" col-md-4 col-md-offset-4 form-horizontal">*/}
            <h3 className="title">登录校园Runner</h3>
            <div className="form-group">
                <label htmlFor="inputStuID" className="col-md-2 control-label">学号</label>
                <div className="col-md-10">
                    <input type="text" className="form-control" id="inputStuID" name="inputStuID"
                           placeholder="Student ID"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword" className="col-md-2 control-label">密码</label>
                <div className="col-md-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <div className="button-center">
                    <button type="submit" className="btn btn-primary" onClick={this.loginClick}>登录</button>
                    <button type="reset" className="btn btn-primary">重置</button>
                </div>
            </div>
            {/*</form>*/}
        </div>

    }
}

class Logo extends React.Component {
    render() {
        return <div className="logo"> runner logo</div>
    }
}


class LoginPage extends React.Component {
    render() {
        return <div className="loginPage">
            <Logo />,
            <Login />
        </div>
    }
}
export default LoginPage;