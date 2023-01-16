import { LoadingTextSection, LoadingGif } from "./styled";
import loadingDarkGif from './loadingDark.gif';
import loadingLightGif from './loadingLight.gif';

const LoadingScreen = ({ loadingText, theme }) => (
    <LoadingTextSection>
        {loadingText}
        <LoadingGif src={theme === "dark" ? loadingLightGif : loadingDarkGif} />
    </LoadingTextSection>
);

export default LoadingScreen;