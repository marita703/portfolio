import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../Components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string = process.env.FROM_EMAIL || "";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      subject: "Hey! thanks for contacting me",
      react: EmailTemplate({ firstName: "John" }),
      text: "Thank you for contacting me!! I will get back to you very soon!!",
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default sendEmail;
