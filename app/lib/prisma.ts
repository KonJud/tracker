import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

export async function getLastFiveOrders() {
    try {
        return await prisma.order.findMany({
            orderBy: {
                updatedAt: "desc"
            },
            take: 5,
        })
    } catch (error) {
        console.log(error)
        throw new Error("Error getting last 5 orders")
    }
} // fonction pour récuperer les 5 dernières commande

export async function getUser() {
    try {
        return await prisma.user.findMany()
    } catch (error) {
        console.log(error)
        throw new Error("Error getting user")
    }
}

export async function getChartData() {
    try {
        const chartData = await prisma.order.groupBy({
            by: ["status", "userId"],
            _count: {
                status: true,
            },
        })// groupemenet des données de la bd par status des commandes et par ID d'utilisateur puis recupération du nombre de commande pour chaque status

        const transformData = chartData.reduce((result: any, item: any) => { //avec la methode reduce on parcourt chaque élément de chartData pour construire une nouvelle structure de donnée
            const status = item.status.toLowerCase()

            const existingEntry = result.find(
                (entry: any) => entry.userId === item.userId
            )

            if (existingEntry) {
                existingEntry[status] = (existingEntry[status] || 0) + item._count.status
            } else {
                const entry: any = {userId: item.userId}
                entry[status] = item._count.status
                result.push(entry)
            } //Pour chaque élément la fonction rapel reduce() est apelé. Si une entrée existe pour cet utilisateur, le nombre de commandes pour le statut donné est ajouté à l'entrée existante. Sinon, une nouvelle entrée est créé pour cet utilisateur, avec le nombre de commandes pour le statut donné.

            return result
        }, [])

        return transformData
    } catch (error) {
        console.log(error)
        throw new Error("Error getting card data")
    }
}

export async function getCardData() {
    try {
        const numberOfOrderDelivered = await prisma.order.count({
            where: {
                status: "delivered"
            }
        })

        const numberOfOrderInTransit = await prisma.order.count({
            where: {
                status: {
                    notIn: ["delivered", "pending"]
                }
            }
        })

        const numberOfOrderPending = await prisma.order.count({
            where: {
                status: "pending",
            }
        })

        return {
            numberOfOrderDelivered,
            numberOfOrderInTransit,
            numberOfOrderPending,
        }
    } catch (error) {
        console.log(error)
        throw new Error("Error getting card data")
    }
}