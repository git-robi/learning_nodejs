import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

/*    //create user 
    const user = await prisma.user.create(
        {
            data: {
                name : 'Dobby',
                email: 'dobbyfreeelf@gmail.com',
            },
        }
    );

  //  console.log(user);

    //get all users
    const users = await prisma.user.findMany();
    console.log(users);
*/

//create beautylog and associate it with user
/*const beautyLog = await prisma.beautyLog.create({
    data: {
        title: 'Fist Log',
        description: 'First log description',
        user: {
            connect: {
                id: 1
            },
        },
    },
});
*/
//const beautyLogs = await prisma.beautyLog.findMany();
//console.log(beautyLogs);

//create user and beautylog and associate them
const user = await prisma.user.create({
        data: {
            name: 'Mario2',
            email: 'supermario2@gmail.com',
            beautyLogs: {
                create: {
                    title: 'Marios mustache transplant',
                    description: 'yeah, its actually fake'
                }
            }
        },
        include: {
            beautyLogs: true
        }
    });

    console.log(user);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });