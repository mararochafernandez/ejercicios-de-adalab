import '../styles/Link.scss';

const Link = (props) => {
  const target = props.openInNewTab ? '_blank' : null;
  const rel = props.openInNewTab ? 'noreferrer' : null;

  return (
    <li>
      <a
        className={props.class}
        href={props.url}
        title={props.name}
        target={target}
        rel={rel}
      >
        {props.name}
      </a>
    </li>
  );
};

export default Link;
