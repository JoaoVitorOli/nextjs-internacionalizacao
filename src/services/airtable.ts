import Airtable from "airtable";

export const basePT = new Airtable({ apiKey: process.env.AIRTABLE_SECRET_KEY })
  .base(process.env.AIRTABLE_BASE_PT!);

export const baseEN = new Airtable({ apiKey: process.env.AIRTABLE_SECRET_KEY })
.base(process.env.AIRTABLE_BASE_EN!);
