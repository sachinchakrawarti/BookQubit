import { useState } from "react";
import Home from "./screens/Home";
import Quote from "./screens/Quote";
import Loading from "./screens/Loading";
import Button from "./components/Button";
import browser from "../shared/browser";

type View = "loading" | "home" | "quote";

export default function Popup() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="w-72 p-4 font-sans">
      <h1 className="text-lg font-bold mb-2">📚 BookQubit</h1>
      <p className="text-sm text-gray-600 mb-4">
        Your daily books & quotes
      </p>

      {view === "loading" && <Loading />}
      {view === "home" && <Home />}
      {view === "quote" && <Quote />}

      <div className="flex space-x-2 mt-4">
        <Button text="Books" onClick={() => setView("home")} />
        <Button text="Quote" onClick={() => setView("quote")} />
        <Button
          text="Open Site"
          onClick={() => browser.tabs.create({ url: "https://bookqubit.com" })}
        />
      </div>
    </div>
  );
}
