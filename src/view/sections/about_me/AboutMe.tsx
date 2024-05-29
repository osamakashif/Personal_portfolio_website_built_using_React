import "./AboutMe.css";
import profilePicture from "../../assets/images/profile_picture.jpg";
import { useEffect, useState } from "react";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedInIcon";

export const AboutMe = () => {
  const [writtenStatement, setWrittenStatement] = useState<boolean>(false);
  const [statementIndex, setStatementIndex] = useState<number>(0);
  const greeting: string = "Hi,";
  const typingDuration: number = 75;
  const typingPauseDuration: number = 500;
  const endStatementsDuration: number = 5000;
  const statements: string[] = [
    "I'm Osama.",
    "I'm a Software Engineer.",
    "I'm a Software Developer.",
    "I'm a Researcher.",
    "I'm Osama.",
  ];

  const statementArraysToString = (statements: string[]): string => {
    let finalStatement = "";
    statements.forEach((statement, index) => {
      if (index !== statements.length - 1) {
        finalStatement += " " + statement;
      }
    });
    return finalStatement.trim();
  };

  const useTypeText = () => {
    const [typedText, setTypedText] = useState<string>("");
    const [delayDuration, setDelayDuration] = useState<number>(typingDuration); // In milliseconds.
    useEffect(() => {
      if (statementIndex !== statements.length - 1 || !writtenStatement) {
        const timeout = setTimeout(() => {
          const toWrite: string = statements[statementIndex];
          const writtenCharacters = typedText.length;
          if (!writtenStatement) {
            setTypedText(typedText + toWrite.charAt(writtenCharacters));
            if (typedText.length === toWrite.length) {
              setWrittenStatement(true);
              setDelayDuration(typingPauseDuration);
              if (statementIndex === statements.length - 1) {
                setStatementIndex(0);
                setDelayDuration(endStatementsDuration);
              }
            }
          }
          if (statementIndex !== statements.length - 1 && writtenStatement) {
            setDelayDuration(typingDuration);
            setTypedText(typedText.substring(0, typedText.length - 1));
            if (
              typedText.length === 0 ||
              typedText ===
                statements[statementIndex + 1].substring(0, typedText.length)
            ) {
              setStatementIndex(statementIndex + 1);
              setWrittenStatement(false);
            }
          }
        }, delayDuration);
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [typedText, delayDuration]);
    return typedText;
  };

  return (
    <div id="about_me" className="section-content section-border-bottom">
      <h1>About Me</h1>
      <div className="about_me_block">
        <img
          src={profilePicture}
          className="display-image"
          alt="Osama Kashif"
        />
        <div>
          <h2>{greeting}</h2>
          <h2 aria-label={statementArraysToString(statements)}>
            {useTypeText()}
          </h2>
        </div>
      </div>
      <p>
        I am a Software Engineer/Developer with an educational background in
        Software Engineering, Mathematics, and Physics. Have diverse industry
        and academic experience with various topics including Web Development,
        App Development, Robotics, and Automation - with and without Artificial
        Intelligence (AI).
      </p>
      <p>
        You can see some of my projects on{" "}
        <a
          href="https://github.com/osamakashif"
          target="_blank"
          rel="noopener noreferrer"
          className="new-page-link inline-link"
        >
          GitHub
          <GitHubIcon className="link-icon inline-start-margin" />
        </a>
        .
      </p>
      <p>
        You can connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/osamakashif"
          target="_blank"
          rel="noopener noreferrer"
          className="new-page-link inline-link"
        >
          LinkedIn
          <LinkedInIcon className="link-icon" />
        </a>
        .
      </p>
    </div>
  );
};
