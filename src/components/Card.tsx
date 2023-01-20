import { CardProps } from '../types/components/TCard';

const Card = ({ icon, title, className, children }: CardProps) => {
  return (
    <article className={`${className} | card`}>
      <header>
        <span className={`${className}__icon`}>
          <i className={icon} />
        </span>
        <h3 className={`${className}__title`}>{title}</h3>
      </header>

      {children}
    </article>
  );
};

export default Card;
