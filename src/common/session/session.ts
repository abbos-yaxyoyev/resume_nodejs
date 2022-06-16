import mongoose from 'mongoose';

export async function withTransaction(callback) {
  try {
    const session = await mongoose.startSession();
    try {
      await session.withTransaction(
        async () => {
          await callback(session);
        },
        {
          // readPreference: { mode: "primary" },
          readConcern: {
            level: 'local',
          },
          writeConcern: {
            w: 'majority',
          },
        },
      );
    } finally {
      await session.endSession();
      console.log('session finished');
    }
  } catch (error) {
    throw error;
  }
}
