// @flow
import React from "react";
import RenderJson from "../renderJson";
import { IJson } from "../../types";
const RenderPage = ({ json, text }: { text: string, json: Array<IJson> }) => {
  return (
    <div className="w3-row w3-padding-top">
      {!json || json.length === 0
        ? <h2>
            {text}
          </h2>
        : <RenderJson json={json} />}
    </div>
  );
};

export default RenderPage;
