// api/portfolio/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message fields are required' });
  }

  // Configure email transporter
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
      pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD
    }
  });

  try {
    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
      to: process.env.EMAIL_USER || 'iamshakill02@gmail.com',
      subject: subject || `New Contact from ${name}`,
      text: `You have received a new message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    console.log('Contact form submission sent to email:', { name, email, subject, message });

    res.status(200).json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Still return success to avoid revealing server errors to client
    res.status(200).json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
  }
}