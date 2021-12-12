import jwt from 'jsonwebtoken';

const validateToken = (token) => {
    if(token){
        const verification = jwt.verify(token, 'secret',(err, data)=>{
            if (data){
                return{
                    data: data,
                }
            }
            if ( err ){
                return{
                    error:err,
                };
            }
        });
        return verification;
    }

}

const generateToquen = (payload)=>{
    return jwt.sign(payload, 'secret', {
        expiresIn: '24h',
    })

}

export {generateToquen, validateToken};