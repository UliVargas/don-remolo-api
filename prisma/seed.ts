import { PrismaClient } from '@prisma/client'
import categories from './__mocks__/Categories.json'
import products from './__mocks__/Products.json'

const prisma = new PrismaClient()

async function Main () {
  await prisma.category.createMany({
    data: categories
  })

  for (const product of products) {
    // eslint-disable-next-line camelcase
    const { category, description, img_url, name, price } = product

    const categoryfind = await prisma.category.findFirst({
      where: {
        name: category
      },
      select: { id: true }
    })

    if (categoryfind) {
      await prisma.product.create({
        data: {
          // eslint-disable-next-line camelcase
          imgURL: img_url,
          description,
          name,
          price,
          categoryId: categoryfind.id
        }
      })
    }
  }
}

Main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
