import { SourceInfoSection } from "./styled";

const SourceInfo = ({ apiResponse }) => (
  <SourceInfoSection error={apiResponse.status === "error"}>
    Kursy pochodzą z baz danych Komisji Europejskiej z dnia{" "}
    <strong>{apiResponse.rateDate.substring(0, 10)}</strong>
  </SourceInfoSection>
);

export default SourceInfo;
