import { Link } from 'react-router-dom';

const UserDetail = (props) => {
  return props.user === undefined ? (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title">Usuario no encontrado</h2>
            <Link to="/">
              <span className="modal__close icon fas fa-times"></span>
            </Link>
          </header>
          <section>
            <p>Búscate la vida</p>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title">{props.user.name}</h2>
            <Link to="/">
              <span className="modal__close icon fas fa-times"></span>
            </Link>
          </header>
          <section>
            <img
              className="card__img"
              src={props.user.image}
              alt={props.user.name}
            />
            <ul className="ml-1 mt-1">
              <li>Edad: {props.user.age}</li>
              <li>Ciudad: {props.user.city}</li>
              <li>Email: {props.user.email}</li>
              <li>Género: {props.user.gender}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
