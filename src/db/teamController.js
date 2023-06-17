
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const checkExistingMember = async (email) => {
    try {
        const res = await prisma.team.findUnique({
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

const createMember = async (memberInfo) => {

    // console.log(memberInfo);
    const { name, description, image } = memberInfo
    // const { name: linkName, url } = links
    try {
        const res = await prisma.team.create({

            data: {
                name,
                description,
                image,
            }
        })

        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const updateTeam = async (memberInfo) => {


    // const { name, teamname } = memberInfo
    // try {
    //     const res = await prisma.team.update({
    //         name, teamname
    //     })
    // } catch (error) {
    //     console.log(error);
    //     return error
    // }
}

const deleteMember = async (id) => {
    try {
        const res = await prisma.team.delete({
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

const getMemberById = async (id) => {
    try {
        const res = await prisma.team.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                image: true,
                description: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const getMembers = async () => {

    try {
        const res = await prisma.team.findMany({
            select: {
                id: true,
                name: true,
                image: true,
                description: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }


}

export { checkExistingMember, createMember, updateTeam, deleteMember, getMemberById, getMembers }