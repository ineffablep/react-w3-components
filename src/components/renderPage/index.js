// @flow
import React from "react";
import uuid from "uuid";
import { Helmet } from "react-helmet";
import RenderJson from "../renderJson";
import { IJson, IMeta, ILink } from "../../types";

const RenderPage = ({
  json,
  text,
  title,
  links,
  metas
}: {
  text: string,
  title: string,
  links: Array<ILink>,
  metas: Array<IMeta>,
  json: Array<IJson>
}) => {
  return (
    <div className="w3-row w3-padding-top">
      <Helmet>
        <title>
          {title}
        </title>
        {metas.map(_ => {
          return <meta {..._} key={uuid.v4()} />;
        })}

        {links.map(_ => {
          return <link {..._} key={uuid.v4()} />;
        })}
      </Helmet>
      {!json || json.length === 0
        ? <h2>
            {text}
          </h2>
        : <RenderJson json={json} />}
    </div>
  );
};

export default RenderPage;
