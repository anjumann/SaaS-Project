import { NextResponse } from 'next/server'

import { createProject,updateProject, getProject, getProjectById, deleteProject } from '@/db/projectController'

export async function POST(request) {
    const projectInfo = await request.json()
    const res = await createProject(projectInfo)
    return NextResponse.json({ data: res })
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (id) {
        const res = await getProjectById(id)
        return NextResponse.json({ data: res })
    } else {
        const res = await getProject()
        return NextResponse.json({ data: res })
    }
}

export async function DELETE (request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await deleteProject(id)
    return NextResponse.json({ data: res })
}