export type TypeInfo = {
  name: string;
  domain: string;
  directionality: "ltr" | "rtl";
};

export const sitesInfoArray: TypeInfo[] = [
  {
    name: "personal",
    domain: "http://localhost:3000/",
    directionality: "ltr",
  },
];

export const sitesObject: { [key: string]: TypeInfo } = sitesInfoArray.reduce(
  (array, site) => ({ ...array, [site.name]: site }),
  {}
);

export const currentSiteString =
  (process.env.NEXT_PUBLIC_SITE_NAME as string) ?? "personal";

export const currentSite: TypeInfo = sitesObject[currentSiteString];
