import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getToolById, CATEGORIES } from "@/data/categories";
import MainLayout from "@/components/layout/MainLayout";

// Import text tool components
import WordCounter from "@/components/tools/WordCounter";
import TextCaseConverter from "@/components/tools/TextCaseConverter";
import TextReverser from "@/components/tools/TextReverser";
import CharacterCounter from "@/components/tools/CharacterCounter";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";
import RemoveExtraSpaces from "@/components/tools/RemoveExtraSpaces";
import AsciiArtGenerator from "@/components/tools/AsciiArtGenerator";
import RandomWordGenerator from "@/components/tools/RandomWordGenerator";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";
import TextToBinary from "@/components/tools/TextToBinary";
import BinaryToText from "@/components/tools/BinaryToText";
import TextToSpeech from "@/components/tools/TextToSpeech";
import SpeechToText from "@/components/tools/SpeechToText";
import UrlEncoderDecoder from "@/components/tools/UrlEncoderDecoder";
import TextDiffChecker from "@/components/tools/TextDiffChecker";

// Import image tool components
import ImageResizer from "@/components/tools/ImageResizer";
import ImageCropper from "@/components/tools/ImageCropper";
import ImageGrayscale from "@/components/tools/ImageGrayscale";
import ImageFormatConverter from "@/components/tools/ImageFormatConverter";
import ImageToBase64 from "@/components/tools/ImageToBase64";
import AddWatermark from "@/components/tools/AddWatermark";
import MemeGenerator from "@/components/tools/MemeGenerator";

// Import SEO tool components
import MetaTagGenerator from "@/components/tools/MetaTagGenerator";
import RobotsTxtGenerator from "@/components/tools/RobotsTxtGenerator";
import OgMetaGenerator from "@/components/tools/OgMetaGenerator";
import CanonicalUrlGenerator from "@/components/tools/CanonicalUrlGenerator";
import XmlSitemapGenerator from "@/components/tools/XmlSitemapGenerator";
import KeywordDensityChecker from "@/components/tools/KeywordDensityChecker";
import PageSpeedTest from "@/components/tools/PageSpeedTest";
import DomainAgeChecker from "@/components/tools/DomainAgeChecker";
import GoogleSerpSimulator from "@/components/tools/GoogleSerpSimulator";

// Import calculator tool components
import PercentageCalculator from "@/components/tools/PercentageCalculator";
import LoanCalculator from "@/components/tools/LoanCalculator";
import LoanEMICalculator from "@/components/tools/LoanEMICalculator";
import TipCalculator from "@/components/tools/TipCalculator";
import GstVatCalculator from "@/components/tools/GstVatCalculator";
import DiscountCalculator from "@/components/tools/DiscountCalculator";
import ProfitMarginCalculator from "@/components/tools/ProfitMarginCalculator";
import SimpleInterestCalculator from "@/components/tools/SimpleInterestCalculator";
import CompoundInterestCalculator from "@/components/tools/CompoundInterestCalculator";
import SalaryHourlyConverter from "@/components/tools/SalaryHourlyConverter";
import InflationCalculator from "@/components/tools/InflationCalculator";
import SplitBillCalculator from "@/components/tools/SplitBillCalculator";
import BmiCalculator from "@/components/tools/BmiCalculator";
import CalorieIntakeCalculator from "@/components/tools/CalorieIntakeCalculator";

// Import number tool components
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";
import PrimeNumberChecker from "@/components/tools/PrimeNumberChecker";
import LcmGcdCalculator from "@/components/tools/LcmGcdCalculator";
import RomanToNumberConverter from "@/components/tools/RomanToNumberConverter";
import NumberToRomanConverter from "@/components/tools/NumberToRomanConverter";
import BinaryToDecimalConverter from "@/components/tools/BinaryToDecimalConverter";
import DecimalToBinaryConverter from "@/components/tools/DecimalToBinaryConverter";
import HexToDecimalConverter from "@/components/tools/HexToDecimalConverter";
import DecimalToHexConverter from "@/components/tools/DecimalToHexConverter";

// Import random generator tool components
import RandomNamePicker from "@/components/tools/RandomNamePicker";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import UuidGenerator from "@/components/tools/UuidGenerator";
import DiceRoller from "@/components/tools/DiceRoller";
import UsernameGenerator from "@/components/tools/UsernameGenerator";
import BusinessNameGenerator from "@/components/tools/BusinessNameGenerator";
import HashtagGenerator from "@/components/tools/HashtagGenerator";
import RandomYesNo from "@/components/tools/RandomYesNo";
import CoinFlip from "@/components/tools/CoinFlip";
import FortuneCookie from "@/components/tools/FortuneCookie";
import Magic8Ball from "@/components/tools/Magic8Ball";

// Import social media tool components
import TwitterCharacterCounter from "@/components/tools/TwitterCharacterCounter";
import FacebookPostPreviewGenerator from "@/components/tools/FacebookPostPreviewGenerator";
import HashtagCounter from "@/components/tools/HashtagCounter";
import YouTubeTitleDescriptionGenerator from "@/components/tools/YouTubeTitleDescriptionGenerator";

// Import developer tool components
import HtmlMinifier from "@/components/tools/HtmlMinifier";
import CssMinifier from "@/components/tools/CssMinifier";
import JavaScriptMinifier from "@/components/tools/JavaScriptMinifier";
import JsonFormatter from "@/components/tools/JsonFormatter";
import HtmlEntityEncoder from "@/components/tools/HtmlEntityEncoder";
import CssGradientGenerator from "@/components/tools/CssGradientGenerator";
import CssBoxShadowGenerator from "@/components/tools/CssBoxShadowGenerator";
import HtmlTableGenerator from "@/components/tools/HtmlTableGenerator";
import CssBorderRadiusGenerator from "@/components/tools/CssBorderRadiusGenerator";
import BootstrapButtonGenerator from "@/components/tools/BootstrapButtonGenerator";
import LoremIpsumDev from "@/components/tools/LoremIpsumDev";
import JavaScriptObfuscator from "@/components/tools/JavaScriptObfuscator";
import RegexTester from "@/components/tools/RegexTester";
import Base64EncoderDecoder from "@/components/tools/Base64EncoderDecoder";

// Import date & time tool components
import TimeZoneConverter from "@/components/tools/TimeZoneConverter";
import StopwatchTimer from "@/components/tools/StopwatchTimer";
import AgeCalculator from "@/components/tools/AgeCalculator";
import DateDifferenceCalculator from "@/components/tools/DateDifferenceCalculator";
import UnixTimestampConverter from "@/components/tools/UnixTimestampConverter";
import WorldClockDisplay from "@/components/tools/WorldClockDisplay";
import CountdownTimerGenerator from "@/components/tools/CountdownTimerGenerator";
import SleepCycleCalculator from "@/components/tools/SleepCycleCalculator";

// Import security tool components
import SecurePasswordGenerator from "@/components/tools/SecurePasswordGenerator";
import Md5HashGenerator from "@/components/tools/Md5HashGenerator";
import EmailValidator from "@/components/tools/EmailValidator";
import FakeNameGenerator from "@/components/tools/FakeNameGenerator";
import UrlSafetyChecker from "@/components/tools/UrlSafetyChecker";

import NotImplemented from "@/components/tools/NotImplemented";

// Import media tools
import YouTubeThumbnailDownloader from "@/components/tools/YouTubeThumbnailDownloader";
import OnlineVoiceRecorder from "@/components/tools/OnlineVoiceRecorder";
import Mp3ToWavConverter from "@/components/tools/Mp3ToWavConverter";
import AudioCutterTrimmer from "@/components/tools/AudioCutterTrimmer";
import VideoCutterTrimmer from "@/components/tools/VideoCutterTrimmer";
import RemoveAudioFromVideo from "@/components/tools/RemoveAudioFromVideo";

// Import ToolLayout to wrap individual components with sidebar
import ToolLayout from "@/components/layout/ToolLayout";

const Tool = () => {
  // Now supports both "/tool/:toolId" and "/:categoryPath/:toolId"
  const { toolId, categoryPath } = useParams<{ toolId?: string; categoryPath?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Identify the current tool
  let tool;
  let actualCategoryPath = categoryPath;
  if (toolId) {
    tool = getToolById(toolId);
    // If we are on /tool/:toolId (no category in URL), find its categoryPath
    if (!categoryPath && tool) {
      // Find the category's path for this tool
      const catObj = CATEGORIES.find(category => category.tools.some(t => t.id === toolId));
      if (catObj && catObj.path) {
        // Redirect to the new URL, preserving query and hash
        const newUrl = `/${catObj.path}/${toolId}${location.search}${location.hash}`;
        // Use replace to not pollute browser history with an extra entry
        useEffect(() => {
          navigate(newUrl, { replace: true });
          // eslint-disable-next-line
        }, [toolId, newUrl, navigate]);
        // Don't render until redirect
        return null;
      }
    } else if (categoryPath && tool) {
      // categoryPath is provided, just validate if correct
      const catObj = CATEGORIES.find(category => category.path === categoryPath);
      if (!catObj || !catObj.tools.some(t => t.id === toolId)) {
        // Tool does not belong to this category, redirect to 404
        useEffect(() => {
          navigate("/404", { replace: true });
          // eslint-disable-next-line
        }, [toolId, categoryPath, navigate]);
        return null;
      }
    }
  }

  // If neither toolId nor category-path/toolId is valid, redirect home
  useEffect(() => {
    if (!tool) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, [tool, navigate]);

  if (!tool) {
    return null;
  }

  // Get the tool component
  const getToolComponent = () => {
    switch (toolId) {
      // Text tools
      case "word-counter":
        return <WordCounter />;
      case "text-case-converter":
        return <TextCaseConverter />;
      case "text-reverser":
        return <TextReverser />;
      case "character-counter":
        return <CharacterCounter />;
      case "remove-duplicate-lines":
        return <RemoveDuplicateLines />;
      case "remove-extra-spaces":
        return <RemoveExtraSpaces />;
      case "ascii-art-generator":
        return <AsciiArtGenerator />;
      case "random-word-generator":
        return <RandomWordGenerator />;
      case "lorem-ipsum-generator":
        return <LoremIpsumGenerator />;
      case "text-to-binary":
        return <TextToBinary />;
      case "binary-to-text":
        return <BinaryToText />;
      case "text-to-speech":
        return <TextToSpeech />;
      case "speech-to-text":
        return <SpeechToText />;
      case "url-encoder-decoder":
        return <UrlEncoderDecoder />;
      case "text-diff-checker":
        return <TextDiffChecker />;
        
      // Image tools
      case "image-resizer":
        return <ImageResizer />;
      case "image-cropper":
        return <ImageCropper />;
      case "image-grayscale":
        return <ImageGrayscale />;
      case "image-format-converter":
        return <ImageFormatConverter />;
      case "image-to-base64":
        return <ImageToBase64 />;
      case "add-watermark":
        return <AddWatermark />;
      case "meme-generator":
        return <MemeGenerator />;
        
      // SEO tools
      case "meta-tag-generator":
        return <MetaTagGenerator />;
      case "robots-txt-generator":
        return <RobotsTxtGenerator />;
      case "og-meta-generator":
        return <OgMetaGenerator />;
      case "canonical-url-generator":
        return <CanonicalUrlGenerator />;
      case "xml-sitemap-generator":
        return <XmlSitemapGenerator />;
      case "keyword-density-checker":
        return <KeywordDensityChecker />;
      case "page-speed-test":
        return <PageSpeedTest />;
      case "domain-age-checker":
        return <DomainAgeChecker />;
      case "google-serp-simulator":
        return <GoogleSerpSimulator />;
        
      // Calculator tools
      case "percentage-calculator":
        return <PercentageCalculator />;
      case "loan-calculator":
        return <LoanCalculator />;
      case "loan-emi-calculator":
        return <LoanEMICalculator />;
      case "tip-calculator":
        return <TipCalculator />;
      case "gst-vat-calculator":
        return <GstVatCalculator />;
      case "discount-calculator":
        return <DiscountCalculator />;
      case "profit-margin-calculator":
        return <ProfitMarginCalculator />;
      case "simple-interest-calculator":
        return <SimpleInterestCalculator />;
      case "compound-interest-calculator":
        return <CompoundInterestCalculator />;
      case "salary-hourly-converter":
        return <SalaryHourlyConverter />;
      case "inflation-calculator":
        return <InflationCalculator />;
      case "split-bill-calculator":
        return <SplitBillCalculator />;
      case "bmi-calculator":
        return <BmiCalculator />;
      case "calorie-intake-calculator":
        return <CalorieIntakeCalculator />;
        
      // Number tools
      case "random-number-generator":
        return <RandomNumberGenerator />;
      case "prime-number-checker":
        return <PrimeNumberChecker />;
      case "lcm-gcd-calculator":
        return <LcmGcdCalculator />;
      case "roman-to-number-converter":
        return <RomanToNumberConverter />;
      case "number-to-roman-converter":
        return <NumberToRomanConverter />;
      case "binary-to-decimal-converter":
        return <BinaryToDecimalConverter />;
      case "decimal-to-binary-converter":
        return <DecimalToBinaryConverter />;
      case "hex-to-decimal-converter":
        return <HexToDecimalConverter />;
      case "decimal-to-hex-converter":
        return <DecimalToHexConverter />;
        
      // Random generator tools
      case "random-name-picker":
        return <RandomNamePicker />;
      case "password-generator":
        return <PasswordGenerator />;
      case "uuid-generator":
        return <UuidGenerator />;
      case "dice-roller":
        return <DiceRoller />;
      case "username-generator":
        return <UsernameGenerator />;
      case "business-name-generator":
        return <BusinessNameGenerator />;
      case "hashtag-generator":
        return <HashtagGenerator />;
      case "random-yes-no":
        return <RandomYesNo />;
      case "coin-flip":
        return <CoinFlip />;
      case "fortune-cookie":
        return <FortuneCookie />;
      case "magic-8-ball":
        return <Magic8Ball />;
        
      // Social tools
      case "twitter-character-counter":
        return <TwitterCharacterCounter />;
      case "facebook-post-preview":
        return <FacebookPostPreviewGenerator />;
      case "hashtag-counter":
        return <HashtagCounter />;
      case "youtube-title-description-generator":
        return <YouTubeTitleDescriptionGenerator />;
        
      // Developer tools
      case "html-minifier":
        return <HtmlMinifier />;
      case "css-minifier":
        return <CssMinifier />;
      case "javascript-minifier":
        return <JavaScriptMinifier />;
      case "json-formatter":
        return <JsonFormatter />;
      case "html-entity-encoder":
        return <HtmlEntityEncoder />;
      case "css-gradient-generator":
        return <CssGradientGenerator />;
      case "css-box-shadow-generator":
        return <CssBoxShadowGenerator />;
      case "html-table-generator":
        return <HtmlTableGenerator />;
      case "css-border-radius-generator":
        return <CssBorderRadiusGenerator />;
      case "bootstrap-button-generator":
        return <BootstrapButtonGenerator />;
      case "lorem-ipsum-dev":
        return <LoremIpsumDev />;
      case "javascript-obfuscator":
        return <JavaScriptObfuscator />;
      case "regex-tester":
        return <RegexTester />;
      case "base64-encoder-decoder":
        return <Base64EncoderDecoder />;
      
      // Date & Time tools
      case "time-zone-converter":
        return <TimeZoneConverter />;
      case "stopwatch-timer":
        return <StopwatchTimer />;
      case "age-calculator":
        return <AgeCalculator />;
      case "date-difference-calculator":
        return <DateDifferenceCalculator />;
      case "unix-timestamp-converter":
        return <UnixTimestampConverter />;
      case "world-clock-display":
        return <WorldClockDisplay />;
      case "countdown-timer-generator":
        return <CountdownTimerGenerator />;
      case "sleep-cycle-calculator":
        return <SleepCycleCalculator />;
      
      // Security Tools
      case "secure-password-generator":
        return <SecurePasswordGenerator />;
      case "md5-hash-generator":
        return <Md5HashGenerator />;
      case "email-validator":
        return <EmailValidator />;
      case "fake-name-generator":
        return <FakeNameGenerator />;
      case "url-safety-checker":
        return <UrlSafetyChecker />;
        
      // Media Tools
      case "youtube-thumbnail":
        return <YouTubeThumbnailDownloader />;
      case "online-voice-recorder":
        return <OnlineVoiceRecorder />;
      case "mp3-to-wav-converter":
        return <Mp3ToWavConverter />;
      case "audio-cutter-trimmer":
        return <AudioCutterTrimmer />;
      case "video-cutter-trimmer":
        return <VideoCutterTrimmer />;
      case "remove-audio-from-video":
        return <RemoveAudioFromVideo />;
      
      default:
        return <NotImplemented tool={tool} />;
    }
  };

  const ToolComponent = getToolComponent();

  return (
    <MainLayout>
      <ToolLayout>
        {ToolComponent}
      </ToolLayout>
    </MainLayout>
  );
};

export default Tool;
