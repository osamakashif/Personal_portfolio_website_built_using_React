import "./AboutMe.css";
import profilePicture from "../../assets/images/profile_picture.jpg";
import { useEffect, useMemo, useState } from "react";

export const AboutMe = () => {
  const [writtenStatement, setWrittenStatement] = useState<boolean>(false);
  const [statementIndex, setStatementIndex] = useState<number>(1);
  const greeting: string = "Hi, ";
  const statements: string[] = useMemo(() => {
    return [
      "I'm Osama",
      "I'm an Engineer",
      "I'm a Developer",
      "I'm a Researcher",
      "I'm Osama",
    ];
  }, []);

  const useTypeText = () => {
    const [typedText, setTypedText] = useState<string>("");
    useEffect(() => {
      if (statementIndex !== statements.length || !writtenStatement) {
        const timeout = setTimeout(() => {
          const toWrite: string = statements[statementIndex - 1];
          const writtenCharacters = typedText.length;
          if (!writtenStatement) {
            setTypedText(typedText + toWrite.charAt(writtenCharacters));
            if (typedText.length === toWrite.length) {
              setWrittenStatement(true);
            }
          }
          if (statementIndex !== statements.length && writtenStatement) {
            setTypedText(typedText.substring(0, typedText.length - 1));
            if (typedText.length === 0) {
              if (statementIndex < statements.length) {
                setStatementIndex(statementIndex + 1);
              }
              setWrittenStatement(false);
            }
          }
        }, 100);
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [statementIndex, statements, typedText, writtenStatement]);
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
