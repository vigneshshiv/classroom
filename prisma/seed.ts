/**
 * Seed prisma configuration
 */
// Application
import prisma from '../src/providers/prisma';
import { Roles } from '../src/shared/base.data';

const loadConfiguration = async () => {
  await prisma.user.upsert({
    create: {
      id: 'al814zcy80074hloomogrg1mv',
      name: 'Nick',
      role: Roles.TEACHER,
      email: 'nick@classroom.com'
    },
    update: {},
    where: { email: 'nick@classroom.com' }
  });

  await prisma.user.upsert({
    create: {
      id: 'bl814zcy80074hloomogrg1mv',
      name: 'James',
      role: Roles.STUDENT,
      email: 'james@classroom.com'
    },
    update: {},
    where: { email: 'james@classroom.com' }
  });
};

loadConfiguration()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
