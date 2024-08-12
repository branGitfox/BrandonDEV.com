import jwt from 'jsonwebtoken'

const generateToken = (res, adminId) => {
    let token = jwt.sign({adminId}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })

    res.cookie('jwt', token, {
        httpOnly:true,
        maxAge:30*24*60*60*1000,
        sameSite:'strict',
    })
}


export default generateToken