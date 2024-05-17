import "./AboutMe.css";
import profilePicture from "../../assets/images/profile_picture.jpg";
import { useEffect, useMemo, useState } from "react";

export const AboutMe = () => {
  const [writtenStatement, setWrittenStatement] = useState<boolean>(false);
  const [statementIndex, setStatementIndex] = useState<number>(0);
  const greeting: string = "Hi,";
  const statements: string[] = useMemo(() => {
    return [
      "I'm Osama.",
      "I'm an Engineer.",
      "I'm a Developer.",
      "I'm a Researcher.",
      "I'm Osama.",
    ];
  }, []);

  const useTypeText = () => {
    const [typedText, setTypedText] = useState<string>("");
    const [delayDuration, setDelayDuration] = useState<number>(100); // In milliseconds.
    useEffect(() => {
      if (statementIndex !== statements.length - 1 || !writtenStatement) {
        const timeout = setTimeout(() => {
          const toWrite: string = statements[statementIndex];
          const writtenCharacters = typedText.length;
          if (!writtenStatement) {
            setTypedText(typedText + toWrite.charAt(writtenCharacters));
            if (typedText.length === toWrite.length) {
              setWrittenStatement(true);
              setDelayDuration(1000);
            }
          }
          if (statementIndex !== statements.length - 1 && writtenStatement) {
            setDelayDuration(100);
            setTypedText(typedText.substring(0, typedText.length - 1));
            if (statementIndex < statements.length - 1) {
              if (
                typedText.length === 0 ||
                typedText ===
                  statements[statementIndex + 1].substring(0, typedText.length)
              ) {
                setStatementIndex(statementIndex + 1);
                setWrittenStatement(false);
              }
            }
          }
        }, delayDuration);
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [
      statementIndex,
      statements,
      typedText,
      writtenStatement,
      delayDuration,
    ]);
    return typedText;
  };

  return (
    <div id="about_me">
      <h1>About Me</h1>
      <div className="about_me_block">
        <img
          src={profilePicture}
          className="display-image"
          alt="Osama Kashif"
        />
        <div>
          <h1>{greeting}</h1>
          <h1>{useTypeText()}</h1>
        </div>
      </div>
      <p>
        I am a Software Engineer/Developer with an educational background in
        Software Engineering, Mathematics, and Physics. Have diverse industry
        and academic experience with various topics including Web Development,
        Robotics, and Artificial Intelligence (AI).
      </p>
    </div>
  );
};
