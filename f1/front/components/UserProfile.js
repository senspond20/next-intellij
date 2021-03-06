import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";

const UserProfile = ({setIsLoggedIn})=>{
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false);
    },[]);
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>GN</Avatar>}
                title ="Gun"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
};
export default UserProfile;