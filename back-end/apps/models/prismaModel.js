import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class prismaModel{
    async createUser(user,hashPassword){
        await prisma.user.create({
            data:{
                email:user.email,
                name:user.name,
                password: hashPassword,
                token:'',
            }
        })
    }

    async findUnique(userEmail){
        return await prisma.user.findUnique({
            where: {email:userEmail}
        })
    }

    async update(userEmail,refreshToken){
        return await prisma.user.update({
            where: {
              email: userEmail,
            },
            data: {
              token: refreshToken,
            },
          })
    }
}

export default new prismaModel()