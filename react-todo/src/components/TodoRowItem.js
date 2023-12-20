function TodoRowItem(props) {
  return (
    <tr>
      <th scopre="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
