import { NextResponse } from "next/server";
const { db } = require('../../../../../lib/db')

export async function POST(req) {
    let reqID = null;
    try {
        var reqBody = await req.json();
        reqID = reqBody._id;
    } catch (err) {
        console.log(err)
    }

    if (reqID) {
        const getStatusQuery = `DELETE FROM requests WHERE _id = ?`;
        const requests = await db.run(getStatusQuery, [reqID])
        return NextResponse.json({
            "message": "Request succesfully cancelled"
        })
    } else {
        return NextResponse.json({
            "message": "Error in cancel request. Please provide the _id of the request to cancel."
        })
    }

}