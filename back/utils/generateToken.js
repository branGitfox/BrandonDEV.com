// import jwt from 'jsonwebtoken'

const generateToken = (res, adminId) => {
    let token = jwt.sign({adminId}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })

    res.cookie('jwt', token, {
        httpOnly:true,
        maxAge:1009098989,
        sameSite:'strict',
        secure:false
    })
}


export default generateToken