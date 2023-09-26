import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../Components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "Mar <mariadelmar.martinezr@rgmail.com>",
      to: ["mariadelmar.martinezr@rgmail.com"],
      subject: "Hey! thanks for contacting me",
      react: EmailTemplate({ firstName: "John" }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
