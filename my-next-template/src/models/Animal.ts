export type AnimalCategory = {
  categoryId: number;
  categoryName: string;
};

export type Animal = {
  scientificName: string; // 学名
  animalCategory: AnimalCategory; // 分類
  theAverageLifeTimeBirths: number; // 生涯出産数の平均
};
