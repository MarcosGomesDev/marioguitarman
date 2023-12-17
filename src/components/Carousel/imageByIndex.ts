import { ImagesArray, images } from "./images";

export const array: ImagesArray[] = images;

const imageByIndex = (index: number): ImagesArray =>
  array[index % array.length];

export default imageByIndex;
