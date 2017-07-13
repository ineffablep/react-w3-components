// @flow
import React from "react";
import Form from "react-json-schema-form/Form";
import uuid from "uuid";
import ReactSchemaViews from "react-schema-views";
import Img from "react-image";
import { IJson } from "../../types";
import Panel from "../panel";
import Alert from "../alert";

const RenderJson = ({ json }: { json: Array<IJson> }) => {
  const componentMap = { Form, Panel, Alert };
  const schemaView = new ReactSchemaViews();
  schemaView.setComponentMap(componentMap);
  return (
    <div>
      {json.map(_ => {
        const { component, ...rest } = _;

        if (component === "Image") {
          return <Img key={uuid.v4()} {...rest} />;
        }
        return (
          <div key={uuid.v4()}>
            {schemaView.parseSchema(_)}
          </div>
        );
      })}
    </div>
  );
};

export default RenderJson;
