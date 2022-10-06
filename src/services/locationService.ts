import { findNearbyByCoordinates } from "../repositories/locationRepository";

export async function getNearbyMarkersRoutine(
  coordinates: number[],
  userId: string
) {
  const placesNearby = await findNearbyByCoordinates(coordinates);
  return placesNearby;
}
