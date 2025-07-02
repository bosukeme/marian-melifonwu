import nodemailer from "nodemailer";

export async function POST(req) {

  const { name, email, message } = await req.json();
    console.log(name, email, message);
    
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_ADDRESS,
    subject: `New message from ${name} (${email})`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail send failed:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
