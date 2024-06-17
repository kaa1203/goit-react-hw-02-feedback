import PropTypes from "prop-types";
import css from "./Section.module.css"

function Section({ children, title }) {
   return (
      <section className={css.container}>
         <h2>{title}</h2>
         {children}
      </section>
   );
}

export default Section;

Section.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired
}