import { NextResponse } from 'next/server'

import { createUser, checkExistingUser, getUser, getUserById, deleteUser, checkUsername, updateUser } from '@/db/userControllers'

export async function POST(request) {
    const userInfo = await request.json()
    const userExist = await checkExistingUser(userInfo.email)
    // console.log('user', userExist);
    if (userExist) {
        return NextResponse.json({ data: { message: 'User already exist' } })
    }
    const usernameExist = await checkUsername(userInfo.username) 
    console.log('username', usernameExist);
    if (usernameExist) {
        return NextResponse.json({ data: { message: 'Username already exist' } })
    }
    const res = await createUser(userInfo)
    return NextResponse.json({ data: res })
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (id) {
        const res = await getUserById(id)
        return NextResponse.json({ data: res })
    } else {
        const res = await getUser()
        return NextResponse.json({ data: res })
    }
}

export async function DELETE (request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await deleteUser(id)
    return NextResponse.json({ data: res })
}