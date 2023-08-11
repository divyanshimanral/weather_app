export default function Day(props) {
  function dateBuilder() {
    const now = new Date();
    let str = now.toString();
    let dateArr = str.split(" ");
    let day = dateArr[0];
    let month = dateArr[1];
    let date = dateArr[2];
    let year = dateArr[3];
    // console.log(dateArr)
    return `${day}, ${date}/${month}/${year}`;
  }
  let day = dateBuilder();
  return (
    <div>
      <h1 className="day">{day}</h1>
    </div>
  );
}
