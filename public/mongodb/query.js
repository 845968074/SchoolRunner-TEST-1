import db from './db';
var User = require('./user.js');


exports.insert = function (req,res) {
    let name = req.body.name;
    let password = req.body.password;
    console.log("111111111");
    db.connect();
    User.findOne({name:name},function (err,user) {
        console.log(user);
        if(err) res.send(err.message);

        if(user == null){
            res.send('NO INFO');
        }else{
            if(user.password != password){
                res.send('passwordError');
            }else{
                if(user.tel||user.email){
                    res.send('SUCCESS');
                }else{
                    res.send('personalInfo');
                }
            }
        }
        db.close();
    });
};

// class operate {
//     Remove(id) {
//         User.remove({ID:id}, function (err, user) {
//             if (err) console.log("err");
//             else console.log("remove: " + user);
//         });
//     }
//
//     Update() {
//         User.update({ID: "1234"}, {ID: '1'},
//             function (err, user) {
//                 if (err) console.log("err");
//                 else console.log("update:" + user);
//             })
//     }
//
//     // find(callback) {
//     //     User.find({}, callback);
//     // }
//
//     FindOne(id) {
//         User.findOne({ID:id}, function (err, user) {
//             if (err) console.log("err");
//             else  console.log("findOne: " + user);
//         });
//     }
//
//     Save(saveinformation) {
//         saveinformation.save(function (err, user) {
//             if (err)  {return false;}
//             else  {console.log(user);}
//             db.close();
//         });
//     }
// /*    Save(saveinf)
//     {
//         saveinf.save(callback);
//     }*/
// }
// module.exports = operate;