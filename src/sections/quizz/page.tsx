import { useState } from "react";
import { questions } from "./questions";
import { cn } from "@/lib/utils";

export const QuizzSection = ({ width }: { width: number }) => {
  const [questionId, setQuestionId] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [isGoodAnswer, setIsGoodAnswer] = useState<null | boolean>(null);

  return (
    <div className="px-2" style={{ width }}>
      <div className="flex gap-2 mt-2">
        {questions.map((_, i) => {
          return (
            <div
              className="cursor-pointer relative flex justify-center items-center h-4 w-4 rounded-full border border-black"
              key={i}
              onClick={() => {
                setQuestionId(i);
              }}
              style={{ backgroundColor: "#F7F5F0" }}
            >
              {i === questionId && (
                <div className="h-2 w-2 rounded-full bg-black" />
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{ backgroundColor: "#F7F5F0" }}
        className="mt-5 rounded-2xl border border-black min-h-36 p-6 flex items-center max-w-[495px]"
      >
        <p>{questions[questionId].question}</p>
      </div>

      <div className="flex gap-4 mt-5">
        <VraiFauxButton
          label="Vrai"
          onClick={() => {
            setIsAnswerShown(true);
            setIsGoodAnswer(
              questions[questionId].goodAnswer === true ? true : false
            );
          }}
          isRightAnswered={
            isGoodAnswer && questions[questionId].goodAnswer === true
              ? true
              : false
          }
          isWrongAnswered={
            isGoodAnswer === false && questions[questionId].goodAnswer === true
          }
        />
        <VraiFauxButton
          label="Faux"
          onClick={() => {
            setIsAnswerShown(true);
            setIsGoodAnswer(
              questions[questionId].goodAnswer === false ? true : false
            );
          }}
          isRightAnswered={
            isGoodAnswer && questions[questionId].goodAnswer === false
              ? true
              : false
          }
          isWrongAnswered={
            isGoodAnswer === false && questions[questionId].goodAnswer === false
          }
        />
      </div>

      {isAnswerShown && (
        <div className="mt-10">
          <p>{questions[questionId].explanation}</p>
        </div>
      )}

      {isAnswerShown && questionId < 4 && (
        <div
          style={{ backgroundColor: "#F7F5F0" }}
          className="mt-5 cursor-pointer rounded-2xl border border-black inline-block px-12 py-2 bricolageFont"
          onClick={() => {
            setQuestionId(questionId + 1);
            setIsAnswerShown(false);
            setIsGoodAnswer(null);
          }}
        >
          Continuer
        </div>
      )}
    </div>
  );
};

type VraiFauxButtonProps = {
  label: string;
  isRightAnswered?: boolean; // In this case, blue background
  isWrongAnswered?: boolean; // In this case, black striped
  onClick: () => void;
};

export const VraiFauxButton = ({
  label,
  isRightAnswered = false,
  isWrongAnswered = false,
  onClick,
}: VraiFauxButtonProps) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer rounded-xl border border-black flex items-center px-12 py-3 bricolageFont",
        isRightAnswered ? "bg-[#84D0F0]" : "bg-button-background"
      )}
      onClick={onClick}
    >
      {isWrongAnswered && (
        <div className="bricolageFont rounded-xl absolute inset-0 bg-[repeating-linear-gradient(#e9e5d8_0px,_#e9e5d8_5px,_black_5px,_black_6px)]" />
      )}
      <p className="relative">{label}</p>
    </div>
  );
};
