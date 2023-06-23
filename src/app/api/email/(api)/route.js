import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function GET(request) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'anjumanraj2@gmail.com',
        from: 'ayusmann23@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    let status = ''
    await sgMail
        .send(msg)
        .then(() => {
            status = `Email sent ${msg.to}`
            console.log(status)
        });

    return NextResponse.json({
        msg: msg,
        res: status
    })
}

