const productModel = require("./../models/product.model");

exports.postProduct = async function(req,res){
    const email = req.body.email;
    const pwd = req.body.password;
    try {
        // b1-  dùng email tìm user trong db -> nếu ko có báo lỗi email hoặc password ko đúng
        const u = await userModel.findOne({email:email});
        if(u == null){
            return res.send("Email or Password is not correct");
        }
        // b2 -  so sanh password - dùng cơ chế hash verify để so sánh
        const verify = bcrypt.compare(password,u.password);// return true/false
        if(!verify){
            return res.send("Email or Password is not correct");
        }
        // b3- phản hồi khi đúng -- lưu user vào session
        req.session.auth = {
            full_name: u.full_name,
            email: u.email
        }
        return res.send("Log in successfully");

    } catch (error) {
        return res.send(error);
    }
}