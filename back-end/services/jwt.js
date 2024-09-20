import crypto from 'crypto'

const header = {
    "alg": "HS256",
    "typ": "JWT"
  }

export function generateToken(obj){
    const payload = { 
        ...obj,sub: crypto.randomBytes(10).toString("hex"),
        exp:new Date().setMinutes(new Date().getMinutes()+5)  
     }
     const signatureParamn = btoa(JSON.stringify(header)) + '.' + btoa(JSON.stringify(payload))

     const signature = crypto.createHmac('sha256',process.env.JWT_SECRET).update(signatureParamn).digest('base64')

     const jwt = signatureParamn + '.' + signature

     return jwt
}

export function verifyToken(jwt){
    const arr = jwt.split('.')

    if(arr.length != 3){
        return false
    }

    const signatureParamn = arr[0] +'.' + arr[1]

    const signature = crypto.createHmac('sha256',process.env.JWT_SECRET).update(signatureParamn).digest('base64')

    if(signature === arr[2]){
        return true
    }else{
        return false
    }

}