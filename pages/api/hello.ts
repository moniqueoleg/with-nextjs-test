// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  program_description: string
  program_content1: string
  program_content2: string
  program_overview: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ program_description: 'Program Description',program_content1:'This 4-Day Upper Lower Programm is By Alberto Nuñez, who is the head bodybuilding coach at 3D Muscle Journey. Alberto is an accomplished lifelong natural bodybuilder, having most recently won Mr. Universe at the 2022 WNBF.',program_content2:'Alberto Nuñez designed this program target your upper and lower body muscles twice a week. Additionally, there are 4 program variations for you to choose from, with each focused more on a specific muscle group.',program_overview:'Program Overview' })
}
