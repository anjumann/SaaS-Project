import { NextResponse } from 'next/server'



export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
        next: {
            revalidate: 60,
        }
    })
    const page = searchParams.get('page') || 1
    const data = await res.json()
    const pageSize = 10
    const totalPage = Math.ceil(data.length / pageSize)
    const photos = data.slice((pageSize * (page-1) ), pageSize * page)
    
    return NextResponse.json({ "data": photos, "size": photos.length, "totalPage": totalPage })
}

