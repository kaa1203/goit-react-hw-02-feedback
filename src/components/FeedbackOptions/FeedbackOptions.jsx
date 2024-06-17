import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback}) {
   return (
      <div className={css.buttonContainer}>
         {options.map(option => ( 
            <button 
               key={option}
               className={css.optionButton}
               onClick={() => onLeaveFeedback(option)}
            > 
               {option} 
            </button>
         ))}

      </div>
   );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
}