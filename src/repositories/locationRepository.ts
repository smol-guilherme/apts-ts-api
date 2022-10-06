import { prisma } from "../database/database";
import { TPlacesInsert } from "../types/dataTypes";

export async function findByCoordinates(coordinates: number[]) {
  return await prisma.places.findFirst({
    where: {
      latitude: coordinates[0],
      longitude: coordinates[1],
    },
    select: {
      id: true,
    },
  });
}

export async function createLocation(data: TPlacesInsert) {
  return await prisma.places.create({ data, select: { id: true } });
}

export async function findNearbyByCoordinates(coordinates: number[]) {
  const upToOneCoord = () => Math.floor((Math.random() + 0.5) * 1000);
  return await prisma.places.findMany({
    where: {
      latitude: {
        lt: coordinates[0] + upToOneCoord(),
        gt: coordinates[0] - upToOneCoord(),
      },
      longitude: {
        lt: coordinates[1] + upToOneCoord(),
        gt: coordinates[1] - upToOneCoord(),
      },
    },
    select: {
      id: true,
      locationName: true,
      latitude: true,
      longitude: true,
      type: true,
    },
  });
}
