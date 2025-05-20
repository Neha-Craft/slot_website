import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()
    console.log(name)
    console.log(email)
    console.log(process.env.SMTP_HOST)
    console.log(process.env.SMTP_USER)

    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,  // smtp.gmail.com
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: process.env.RECEIVER_EMAIL,
  subject: `New Enquiry from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2 style="color: #2c3e50;">New Message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
      <hr />
      <p style="font-size: 23px; color: #FFFFF;">Thanks For connecting us ${name}</p>
      <p style="font-size: 12px; color: #999;">Sent from your website contact form.</p>
    </div>
  `,
})





    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Email sending failed:', error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
