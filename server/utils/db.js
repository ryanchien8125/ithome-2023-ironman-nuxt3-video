import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'
neonConfig.webSocketConstructor = ws

export const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export default {
  pool
}
