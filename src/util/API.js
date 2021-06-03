import axios from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/ssepulvedamcl/medu-react-desde-cero/",
  responseType: "json"
});
