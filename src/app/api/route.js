import { NextResponse } from 'next/server'

export async function GET(request) {

    const data = await fetch('https://api.github.com/users/anjumann').then(res => res.json())



    return NextResponse.json({
        Message: 'Welcome to the APIs',
        Creater: 'Anjuman Raj',
        "Github info": JSON.stringify(data)
    })
}

