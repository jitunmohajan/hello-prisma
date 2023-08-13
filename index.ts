import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    // const getAllUsers = await prisma.user.findMany();
    // console.log(getAllUsers);

    const postUsers = await prisma.user.create({
        data:{
            email: "asd1@gmail.com",
            name: "asd1",
            age: 34
        }
    })
}

main();