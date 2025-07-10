import {z} from 'zod';
import 'dotenv/config'

export const env = z.object({
    PORT: z.coerce.number().min(3000).max(55000).default(3000),
    FRONTEND_END_POINT:z.coerce.string(),
    HOST:z.coerce.string({message:'Host name should be universal i.e 0.0.0.0'}).default('0.0.0.0'),
    REGISTRATION_TABLE_NAME:z.coerce.string()
}).parse(process.env)