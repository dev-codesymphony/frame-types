export interface IAttributes {
  trait_type: string;
  value: string;
}

export interface IMetadata {
  description: string;
  image: string;
  dna: string;
  edition: string;
  attributes: IAttributes[];
  compiler: string;
  filename: string;
  filedate: number;
  uuid: string;
}
