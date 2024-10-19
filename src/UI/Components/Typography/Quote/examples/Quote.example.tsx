import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import Quote from "../Quote";
import { TCite } from "../types/TCite";

const QuoteExamples = () => {
  const { colors } = useTheme();

  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
    variant: colors.secondary,
  };

  return (
    <Quote
      cite={cite as string & TCite}
      options={{
        gap: 4,
        textVariant: colors.infoLight,
      }}
    >
      For 50 years, WWF has been protecting the future of nature. The world's leading
      conservation organization, WWF works in 100 countries and is supported by 1.2
      million members in the United States and close to 5 million globally.
    </Quote>
  );
};

export default QuoteExamples;
