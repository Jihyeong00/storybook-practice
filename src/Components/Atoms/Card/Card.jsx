import styled from "styled-components";
import MuiButton from "../Button/Button";
import MuiAvatar from "../Avatar/Avatar";
import {ButtonGroup} from "@mui/material";
import PropTypes from "prop-types";




export const Card = ({...args}) => {
    return (
        <>
            <S.CardBox>
                <S.ProfileBox>
                    <MuiAvatar
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png'}/>
                    text
                </S.ProfileBox>
                <ButtonGroup variant="contained">
                    {Array.isArray(args.dataList) && args.dataList.map(data => <MuiButton {...data}/>)}
                </ButtonGroup>
            </S.CardBox>
        </>)
}

export default Card


const CardBox = styled.div`
  width: 100%;
  height: 100px;
  background: #e7fdd8;
  padding: 10px;
`

const ProfileBox = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 10px;
  gap: 10px;
`
const S = {
    CardBox, ProfileBox
}

Card.propTypes = {
    /**
     * What dataList is in the button?
     */
    dataList: PropTypes.array
}

Card.defaultProps = {
    dataList: [{
        color: "primary",
        label: "React",
        sx: {color: 'skyblue'},
    }, {
        color: "primary",
        label: "TypeScript",
        sx: {color: 'blue'},
    }, {
        color: "primary",
        label: "Next",
        sx: {color: 'grey'}
    }]
};