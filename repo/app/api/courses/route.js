import data from "./data.json";
import { NextResponse } from 'next/server'

export async function GET(request) {
    return NextResponse.json(data)
}