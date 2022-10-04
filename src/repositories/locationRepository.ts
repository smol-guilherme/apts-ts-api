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
