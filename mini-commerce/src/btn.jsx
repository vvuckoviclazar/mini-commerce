function Btn({ children, variation }) {
  const baseClass = "go-back-btn";
  let modifierClass = "";

  if (variation === "go") {
    modifierClass = "go";
  } else if (variation === "back") {
    modifierClass = "back";
  }

  const finalClass = `${baseClass} ${modifierClass}`;

  return <button className={finalClass}>{children}</button>;
}

export default Btn;
