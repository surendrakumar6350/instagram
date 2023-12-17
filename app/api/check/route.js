import { NextResponse } from "next/server"


export async function POST(request) {
   try {
    const cook = await request.cookies.get('insta')
    if(cook) {
        return NextResponse.json({
            success: true
        })
    }
    else {
        return  NextResponse.json({
            success: false
        })
    }
   }
   catch (error) {
    console.log(error)
    return NextResponse.json({
        success: false,
        message: "api error"
    })
   }
}