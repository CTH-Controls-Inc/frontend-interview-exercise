
import { NextResponse } from "next/server";
const { db } = require('../../../../../lib/db')

export async function POST(req) {
    let partNumber = null;
    let createdBy = null;
    try {
        var reqBody = await req.json();
        partNumber = reqBody.partNumber;
        createdBy = reqBody.createdBy;
    } catch (err) {
        console.log(err)
    }

    if (partNumber && createdBy) {
        const createRequestQuery = `INSERT INTO requests (partNumber,partName,createdBy) VALUES (?,?,?);`;
        const requests = await db.run(createRequestQuery, [
            partNumber,
            "Material " + partNumber,
            createdBy
        ])
        return NextResponse.json({
            "message": "Request succesfully created"
        })
    } else {
        return NextResponse.json({
            "message": "Missing parameters required to create new request."
        })
    }

}