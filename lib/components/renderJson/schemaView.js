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

var componentMap = {
  Form: Form,
  Panel: Panel,
  Alert: Alert,
  SlideShow: SlideShow,
  Progress: Progress,
  Slide: Slide,
  PercentageStats: PercentageStats,
  NumberStats: NumberStats,
  Badge: Badge
};
var SchemaView = new ReactSchemaViews();
SchemaView.setComponentMap(componentMap);
export default SchemaView;