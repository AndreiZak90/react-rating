import StarsImg from "./StarsImg";
import { Props } from "./module/one_mod";

export default function Stars(props: Props) {
  const { count } = props;

  const starsValue = [];
  if (typeof count !== "number" || count > 5 || count < 1) {
    return;
  }

  for (let i = 0; i < count; i++) {
    starsValue.push(i);
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {starsValue.map((el) => (
        <StarsImg key={el.toString()} />
      ))}
    </ul>
  );
}
