import jwt from 'jsonwebtoken';

const generateToquen = (payload)=>{
    return jwt.sign(payload, 'secret', {
        expiresIn: '24h',
    })

}

export {generateToquen};