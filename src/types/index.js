// @flow

export interface IJson {
  path: string,
  text: string,
  component: string,
  props: any,
  children: any,
  schema: any
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
