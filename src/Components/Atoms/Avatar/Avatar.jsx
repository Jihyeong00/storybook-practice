import PropTypes from 'prop-types';
import Avatar from "@mui/material/Avatar";

export const sizeCSS = {
    default: {
        width: 16,
        height: 16
    },
    small: {
        width: 12,
        height: 12
    },
    medium:{
        width:24,
        height:24
    },
    large: {
        width: 32,
        height: 32
    }
}

export const MuiAvatar = (args) => {
    return (
        <Avatar {...args}/>
    );
};

MuiAvatar.propTypes = {
    /**
     * 아바타의 사이즈는 어떻게 할까요?
     */
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
    /**
     * 아바타의 그림은 어떤걸 삽입 할까요?
     */
    src: PropTypes.string.isRequired,
    /**
     * 아바타의 대체 이미지는 어떻게 할까요
     */
    alt: PropTypes.string
};

MuiAvatar.defaultProps = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png',
    alt: '대체 이미지',
    size: 'default'
};

export default MuiAvatar