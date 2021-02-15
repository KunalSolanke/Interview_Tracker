import { env } from "../http/api";
const google = {
  clientId:
    "495698794919-ra10r1v99lf1202f0eg617nbsjl4r614.apps.googleusercontent.com",
  cookiePolicy: "single_host_origin",
};
const outlook = {
  clientId: "79135825-5661-415a-a8ba-c9075b8dcc6a",
  validateAuthority: false,
  redirectUri:
    env == "dev"
      ? "http://localhost:3000/"
      : "https://interview-tracker.netlify.app/",
  tenantUrl:
    "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c",
};
const github = {
  clientId: "f134f0ff4de45ff0db85",
  redirectUri: "",
};
export default {
  google,
  outlook,
  github,
};
