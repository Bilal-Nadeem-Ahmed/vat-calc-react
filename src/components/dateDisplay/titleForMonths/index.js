const Title = ({word}) => {
    if (word === "Purchases") {
        return (
          <tr>
            <th> {word} excl Vat</th>
            <th> Vat On {word}</th>
          </tr>
        );
      }
  
      return (
        <tr>
          <th> Total {word}</th>
          <th> Vat On {word}</th>
        </tr>
      );
}
 
export default Title;