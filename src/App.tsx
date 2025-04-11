import { useState } from "react";
import "./App.css";

function App() {
  const [textList, setTextList] = useState<string[]>([
    "다소 간단한? 또는 살짝 복잡한 로직 짤때 원래 고민하고 코드 짜고 잘 굴러가는 맛이 있었는데 AI 를 활용하면 훨씬 빠르고 더 적절한 로직이 나오니까 AI를 활용 해야 할 것 같은데 고민이 되네요(근데 저는 틀딱 마인드라 아직도 그냥 짜는 경우가 더 많긴 합니다) 어떻게 대처 해야할까요 앞으로는",
    "날씨가 너무 좋았던 한 주였습니다..! 이번 주에는 점심시간에 벚꽃을 많이 보러 다녀서 좋았어요! 근무시간 중 가장 힐링되는 산책시간  .. 다들 여유가 있는 시기가 오면 다같이 나가서 기분 전환하는 시간이 좀 더 많아졌으면 좋겠습니다 ㅎㅎ",
    "AI가 한발한발 인간의 영역을 잡아먹고 있어서 고민이 많이됩니다.. 어떻게 대응하면 좋을까요?",
  ]);
  const [currentText, setCurrentText] = useState<string>("");

  const handleButtonClick = () => {
    if (textList.length === 0) {
      setCurrentText("모든 메시지를 확인했습니다!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * textList.length);
    const selectedText = textList[randomIndex];
    setCurrentText(selectedText);
    setTextList(textList.filter((_, index) => index !== randomIndex));
  };

  return (
    <div className="container">
      <button onClick={handleButtonClick} className="message-button">
        메시지 보기
      </button>
      {currentText && (
        <div className="message-container">
          <p>{currentText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
