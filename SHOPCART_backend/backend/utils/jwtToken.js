// Creating token and saving cookie

const sendToken = (user,statusCode,res)=>{

    const token = user.getJWTToken();

    res.status(statusCode).json({
        success:true,
        user,
        token,
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        )
    });
};

module.exports = sendToken;