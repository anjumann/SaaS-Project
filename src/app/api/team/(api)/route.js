import { NextResponse } from 'next/server'

import { checkExistingMember, createMember, updateTeam, deleteMember, getMemberById, getMembers } from '@/db/teamController.js'

export async function POST(request) {
    const memberInfo = await request.json()
    // const teamExist = await checkExistingteam(memberInfo.email)
    // console.log('team', teamExist);
    // if (teamExist) {
    //     return NextResponse.json({ data: { message: 'team already exist' } })
    // }
    // const usernameExist = await checkteamname(memberInfo.teamname) 
    // if (usernameExist) {
    //     return NextResponse.json({ data: { message: 'Username already exist' } })
    // }
    const res = await createMember(memberInfo)
    return NextResponse.json({ data: res })
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (id) {
        const res = await getMemberById(id)
        return NextResponse.json({ data: res })
    } else {
        const res = await getMembers()
        return NextResponse.json({ data: res })
    }
}

export async function DELETE (request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const res = await deleteMember(id)
    return NextResponse.json({ data: res })
}