import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, company, linkedin, age, city } = body

    const newLead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        company,
        linkedin,
        age,
        city,
      },
    })

    return NextResponse.json({ success: true, data: newLead }, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
  }
}
