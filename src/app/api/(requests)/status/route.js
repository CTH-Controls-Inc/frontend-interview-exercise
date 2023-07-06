import { NextResponse } from "next/server";
const { db } = require('../../../../../lib/db')

export async function GET(req) {

    const getStatusQuery = `SELECT * FROM requests`;
    const requests = await db.all(getStatusQuery, [])
    return NextResponse.json(requests)

}