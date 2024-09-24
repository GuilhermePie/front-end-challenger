import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class prismaModel{
    async createUser(user,hashPassword){
        await prisma.user.create({
            data:{
                email:user.email,
                name:user.name,
                password: hashPassword,
            }
        })
    }

    async findUnique(userEmail){
        return await prisma.user.findUnique({
            where: {email:userEmail}
        })
    }
}

export default new prismaModel()