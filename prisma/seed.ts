/**
 * Seed prisma configuration
 */
// Application
import prisma from 'providers/prisma';
import { Roles } from 'shared/base.data';

const loadConfiguration = async () => {
  await prisma.user.upsert({
    create: {
      id: 'al814zcy80074hloomogrg1mv',
      name: 'Nick',
      role: Roles.Teacher,
      email: 'nick@classroom.com'
    },
    update: {},
    where: { email: 'nick@classroom.com' }
  });

  await prisma.user.upsert({
    create: {
      id: 'bl814zcy80074hloomogrg1mv',
      name: 'James',
      role: Roles.Student,
      email: 'james@classroom.com'
    },
    update: {},
    where: { email: 'james@classroom.com' }
  });
};

loadConfiguration();
