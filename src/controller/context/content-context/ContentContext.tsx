import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LanguageContent } from "../../../model/content/LanguageContent";
import { Content } from "../../../model/content/Content";

const contentInEnglish: LanguageContent = new LanguageContent(
  "English",
  new Content(
    "Osama Kashif",
    "About Me",
    "Hi",
    [
      "I'm Osama.",
      "I'm a Software Engineer.",
      "I'm a Software Developer.",
      "I'm a Researcher.",
      "I'm Osama.",
    ],
    "I am a Software Engineer/Developer with an educational background in Software Engineering, Mathematics, and Physics. Have diverse industry and academic experience with various topics including Web Development, Robotics, and Artificial Intelligence (AI).",
    "You can see some of my projects on ",
    "You can connect with me on ",
    "GitHub",
    "LinkedIn",
    "Projects",
    "Sort by programming language",
    "In case the projects are not visible on this page, you can see some of my projects on "
  )
);

const contentInUrdu: LanguageContent = new LanguageContent(
    "Urdu",
    new Content(
      "اسامہ کاشف",
      "میرے بارے میں",
      "اسلام علیکم",
      [
        "میں اسامہ ہوں۔",
        "میں ایک سافٹ ویئر انجینئر ہوں۔",
        "میں ایک سافٹ ویئر ڈویلپر ہوں۔",
        "میں ایک محقق ہوں۔",
        "میں اسامہ ہوں۔",
      ],
      "I am a Software Engineer/Developer with an educational background in Software Engineering, Mathematics, and Physics. Have diverse industry and academic experience with various topics including Web Development, Robotics, and Artificial Intelligence (AI).",
      "You can see some of my projects on ",
      "You can connect with me on ",
      "GitHub",
      "LinkedIn",
      "Projects",
      "Sort by programming language",
      "In case the projects are not visible on this page, you can see some of my projects on "
    )
  );

export const ContentContext = createContext({
  language: "English",
  content: contentInEnglish.content,
  switchLanguage: (newLanguage: string) => {},
});

export function ContentContextProvider({ children }: { children: any }) {
  const languageSettings = (): string => {
    let languageInSettings: string = "English";
    const languageCode: string = navigator.language.slice(0, 2);
    if (languageCode === "en") {
      languageInSettings = "English";
    }
    if (languageCode === "ur") {
      languageInSettings = "Urdu";
    }
    return languageInSettings;
  };
  const [language, setLanguage] = useState<string>(languageSettings());
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [content, setContent] = useState<Content>(contentInEnglish.content);
  const cache_key = "language";

  const updateContent = useCallback(() => {
    const contentForLanguages: LanguageContent[] = [contentInEnglish, contentInUrdu];
    const contentForLanguage: LanguageContent | undefined =
      contentForLanguages.find((contentInLanguage) => {
        return contentInLanguage.language === language;
      });
    if (contentForLanguage) {
      setContent(contentForLanguage?.content);
    }
  }, [language]);

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem(cache_key, language);
    }
  }, [language, firstLoad]);

  useEffect(() => {
    const stored_value = localStorage.getItem(cache_key);
    if (stored_value === "English" || stored_value === "Urdu") {
      setLanguage(stored_value);
    } else {
      setLanguage(language);
    }
    setFirstLoad(false);
    updateContent();
  }, [language, updateContent]);

  const switchLanguage = useCallback(
    (newLanguage: string) => {
      if (newLanguage === "English" || newLanguage === "Urdu") {
        setLanguage(newLanguage);
        updateContent();
      }
    },
    [updateContent]
  );

  const contentContext = useMemo(
    () => ({
      language,
      content,
      switchLanguage,
    }),
    [language, content, switchLanguage]
  );
  return (
    <ContentContext.Provider value={contentContext}>
      {children}
    </ContentContext.Provider>
  );
}
