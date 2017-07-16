// @flow
export interface IJson {
  path: string,
  text: string,
  component: string,
  props: any,
  children: any,
  schema: any
}

export interface ILink {
  rel: string,
  href: string
}

export interface IMeta {
  property: string,
  content: string,
  name: string
}

export interface IRoutes {
  text: string,
  url: string,
  json: Array<IJson>
}

export interface IAlert {
  alertText: string,
  className: string
}
