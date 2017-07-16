import Form from "react-json-schema-form/Form";
import ReactSchemaViews from "react-schema-views";
import Alert from "../alert";
import Badge from "../badge";

import Panel from "../panel";
import Slide from "../slideShow/slide";
import SlideShow from "../slideShow";
import Progress from "../progress";
import PercentageStats from "../stats/percentageStats";
import NumberStats from "../stats/numberStats";

const componentMap = {
  Form,
  Panel,
  Alert,
  SlideShow,
  Progress,
  Slide,
  PercentageStats,
  NumberStats,
  Badge
};
const SchemaView = new ReactSchemaViews();
SchemaView.setComponentMap(componentMap);
export default SchemaView;
