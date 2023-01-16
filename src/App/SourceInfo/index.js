import { SourceInfoSection } from "./styled";

const SourceInfo = ({ rateDate }) => (
    <SourceInfoSection>
        Kursy pochodzą z baz danych Komisji Europejskiej z dnia <strong>{rateDate}</strong>
    </SourceInfoSection>
);

export default SourceInfo;