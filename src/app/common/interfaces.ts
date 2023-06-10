export interface IEdenInfo {
  src: string;
  text?: string;
  link?: string;
}

export type LandingAboutUs = {
  id: string;
  headline: string;
  content: string;
}

declare type Item = Record<string, any>;

declare type TypeMap = {
    [k: string]: object;
};

declare type DefaultType = {
    [field: string]: any;
};

declare type TypeOf<T extends TypeMap, K extends keyof T> = T[K] extends undefined ? DefaultType : T[K];

interface IItems<T extends Item>{
  someMethod():T
}

declare class Directus<T extends TypeMap>{
  items<C extends string, I extends Item = TypeOf<T, C>>(collection: C): IItems<I>;    
}

declare class MyType {
  A:string;
}

export type MyCollections = {
  "landing_page": MyType
}