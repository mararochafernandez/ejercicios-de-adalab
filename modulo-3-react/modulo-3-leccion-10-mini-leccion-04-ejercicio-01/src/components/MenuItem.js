const MenuItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        title={`Ir a: ${props.text}`}
        target={props.openInNewTab ? '_blank' : ''}
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
};

export default MenuItem;
