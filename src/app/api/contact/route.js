import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, event, contactPerson, phone, eventDate } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: 'hello@srmresort.in',
        pass: 'Shriji@1234',
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'sudeep@craftandcode.in',
      subject: `New Event Enquiry from ${name}`,
      html: `
        <h2>Event Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}





// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { name, email, message, event, contactPerson, phone, eventDate } = await request.json();

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST, 
//       port: 465,
//     secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: `New Event Enquiry from ${name}`,
//       html: `
//         <h2>Event Enquiry</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Contact Person:</strong> ${contactPerson}</p>
//         <p><strong>Event:</strong> ${event}</p>
//         <p><strong>Event Date:</strong> ${eventDate}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error("Email send error:", err);
//     return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
//   }
// }
