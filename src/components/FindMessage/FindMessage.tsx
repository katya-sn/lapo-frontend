import { useContext, useEffect, useState } from "react";
import "./FindMessage.scss";
import { GlobalContext } from "../../context/GlobalContext";

export const FindMessage = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(() => sessionStorage.getItem('isMessageOpen') !== 'false');
  const { isSosFormOpen, setIsSosFormOpen } = useContext(GlobalContext);
  
  useEffect(() => {
    sessionStorage.setItem('isMessageOpen', String(isMessageOpen));
  }, [isMessageOpen])

  return (
    <div className="find-message">
      {isMessageOpen && (
        <>
          <button
            className="icon icon-close icon-close-form"
            onClick={() => setIsMessageOpen(false)}
          />
          <div className="find-message__text">
            Знайшов тварину, яка потребує допомоги? Заповни форму!
          </div>
        </>
      )}
      <button
        className="icon icon-bot"
        onClick={() => setIsSosFormOpen(true)}
      />
    </div>
  );
};
