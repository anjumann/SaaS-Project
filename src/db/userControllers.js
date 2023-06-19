
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const checkExistingUser = async (email) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (res) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return error
    }
}

const createUser = async (userInfo) => {

    // console.log(userInfo);
    const { name, email, password, username } = userInfo
    try {
        const res = await prisma.user.create({

            data: {
                name,
                email,
                password,
                username
            }
        })

        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const updateUser = async (userInfo) => {


    const { name, username } = userInfo
    try {
        const res = await prisma.user.update({
            name, username
        })
    } catch (error) {
        console.log(error);
        return error
    }
}



const checkUsername = async (username) => {

    try {
        const res = await prisma.user.findUnique({
            where: {
                username
            }
        })
        console.log('username',res);
        if (res) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return error
    }

}

const deleteUser = async (id) => {
    try {
        const res = await prisma.user.delete({
            where: {
                id
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const getUserById = async (id) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                username: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const getUser = async () => {

    try {
        const res = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                username: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }


}

export { createUser, checkExistingUser, checkUsername, updateUser, deleteUser, getUserById, getUser }