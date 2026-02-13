export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string; // subtitle
  tagline: string; // title
  shortDescription: string; // description
  highlightTitle: string; // title2
  highlightDescription: string; // description2
  fullDescription: string; // description3
  features: ProductFeature[]; // item
  mainImage: string; // image
  secondaryImage: string; // image2
  icon: string;
  labelColor: string;
  buttonColor: string;
  borderColor: string;
}
