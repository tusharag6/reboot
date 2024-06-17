import { migrate } from 'drizzle-orm/postgres-js/migrator';
import config from '../../drizzle.config';
import { db, connection } from '../db';
import env from '../env';

async function main() {
  if (!env.DB_MIGRATING) {
    throw new Error(
      'You must set DB_MIGRATING to "true" when running migrations'
    );
  }

  await migrate(db, { migrationsFolder: config.out! });

  await connection.end();
}

main().catch((err) => {
  console.error('Error during migration:', err);
  process.exit(1);
});
