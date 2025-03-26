import { StyledMain } from "../../styledC/generic/Screens";
import { useParams } from "react-router-dom";
import { usersDataSelect } from "../../features/userOperations/userSlice";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import { StyledTitle } from "../../styledC/generic/Text";

const Profile  = () => {
    const { userId } = useParams<{userId: string}>();
    const usersData = useSelector(usersDataSelect);
    const gamesData = useSelector(gamesDataSelect)

    const userProfile = usersData.find(user => user._id === userId);


    const userShow = {
        id: userProfile?._id,
        name: userProfile?.name || "",
        email: userProfile?.email || "",
        phone: userProfile?.phone || 0,
        owned: userProfile?.owned || [],
    };

    return (
        <StyledMain>
            <StyledTitle>¡Saludos usuario {userShow.name}</StyledTitle>
        </StyledMain>
    )

}

export default Profile;