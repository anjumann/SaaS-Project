import { NextResponse } from 'next/server'

export async function GET(request) {

    const data = await fetch('https://api.github.com/users/anjumann').then(res => res.json())
    const repo = await fetch('https://api.github.com/users/anjumann/repos').then(res => res.json())

    const repoList = [repo.map((item) => {
        return {
            'name': item.name,
            'url': item.html_url
        }
    })]

    return NextResponse.json({
        Message: 'Welcome to the APIs',
        Creater: 'Anjuman Raj',
        "Github info": {
            "Name": data.name,
            "userName": data.login,
            "Bio": data.bio,
            "Github URl": data.html_url,
            "Repo": repoList
        }
    })
}

