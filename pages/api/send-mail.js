const nodemailer = require("nodemailer");

async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: "465",
    secure: true,
    auth: {
      user: "contact@technologeek.ca",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "contact@technologeek.ca",
    to: "contact@technologeek.ca",
    replyTo: formData.email,
    subject: formData.subject,
    text: formData.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true, error: false };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error, success: false };
  }
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const formData = req.body;
    const { error, success } = await sendEmail(formData);

    if (error) {
      return res.status(500).json({ success, message: "Error sending email" });
    }

    res.status(200).json({ success, message: "Email sent successfully" });
  }
};

export default handler;
