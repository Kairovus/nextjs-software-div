require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding users, profiles, and follows (no posts/likes)...');

  const usersData = [
    { username: 'alice', email: 'alice@example.com', password: 'password' },
    { username: 'bob', email: 'bob@example.com', password: 'password' },
    { username: 'charlie', email: 'charlie@example.com', password: 'password' },
  ];

  const createdUsers = [];
  for (const u of usersData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
    createdUsers.push(user);
  }

  // create profiles for each user
  for (const u of createdUsers) {
    await prisma.profile.upsert({
      where: { userId: u.id },
      update: {},
      create: {
        userId: u.id,
        bio: `Hi, I'm ${u.username}`,
        avatarUrl: null,
      },
    });
  }

  // create some follow relationships (bob and charlie follow alice)
  const alice = createdUsers.find((x) => x.username === 'alice');
  const bob = createdUsers.find((x) => x.username === 'bob');
  const charlie = createdUsers.find((x) => x.username === 'charlie');

  if (alice && bob) {
    await prisma.follow.upsert({
      where: { followerId_followingId: { followerId: bob.id, followingId: alice.id } },
      update: {},
      create: { followerId: bob.id, followingId: alice.id },
    });
  }

  if (alice && charlie) {
    await prisma.follow.upsert({
      where: { followerId_followingId: { followerId: charlie.id, followingId: alice.id } },
      update: {},
      create: { followerId: charlie.id, followingId: alice.id },
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
