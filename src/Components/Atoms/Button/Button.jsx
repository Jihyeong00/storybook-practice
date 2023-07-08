import PropTypes from 'prop-types';
import {Button} from "@mui/material";

export const MuiButton = ({...args}) => {
    console.log(args)
    return <Button {...args}>{args.label}</Button>
};


MuiButton.propTypes = {
    /**
     * You can enter the string within the button.
     */
    label:  PropTypes.string.isRequired,
    /**
     * You can choose the style type of button.
     */
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
    /**
     * What size is the button?
     */
    size: PropTypes.oneOf(['default','small', 'medium', 'large']),
    /**
     * You can set a shortcut link to the button.
     */
    href: PropTypes.string,
    /**
     * What is Button color?
     */
    color: PropTypes.oneOf(['secondary', 'success', 'error','primary']),
    /**
     * You can choose the button activation status
     */
    disabled: PropTypes.bool,
    sx: PropTypes.shape({})
};

MuiButton.defaultProps = {
    size:'default',
    variant: 'contained',
    disabled: false
};

export default MuiButton