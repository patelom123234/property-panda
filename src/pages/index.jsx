
import Home_V2 from "./homes/home-v2/index";
import Wrapper from "./layout-wrapper/wrapper";

import MetaData from "@/components/common/MetaData";

const metaInformation = {
  title: "Home v1 || Homez - Real Estate ReactJS Template",
};

export default function Mainpage() {
  return (
    <Wrapper>
      <MetaData meta={metaInformation} />
      <Home_V2 />
    </Wrapper>
  );
}
