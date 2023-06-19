
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



const createProject = async (projectInfo) => {

    const { title, description, image, intro } = projectInfo
    try {
        const res = await prisma.project.create({

            data: {
                title, description, image, intro
            }
        })

        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const updateProject = async (projectInfo) => {

    const { title, description, image, intro } = projectInfo

    try {
        const res = await prisma.project.update({
            title, description, image, intro
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const deleteProject = async (id) => {
    try {
        const res = await prisma.project.delete({
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

const getProjectById = async (id) => {
    try {
        const res = await prisma.project.findUnique({
            where: {
                id
            },
            select: {
                title: true, description: true, image: true, intro: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}

const getProject = async () => {

    try {
        const res = await prisma.project.findMany({
            select: {
                title: true, description: true, image: true, intro: true
            }
        })
        return res
    } catch (error) {
        console.log(error);
        return error
    }


}

export { createProject,updateProject, getProject, getProjectById, deleteProject }