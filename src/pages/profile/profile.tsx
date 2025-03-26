import { StyledMain } from "../../styledC/generic/Screens";
import { useParams } from "react-router-dom";
import { usersDataSelect } from "../../features/userOperations/userSlice";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import { StyledTitle } from "../../styledC/generic/Text";
import { StyledTitleProfile, StyledLineProfile, StyledNothingProfile, StyledGameRowProfile, StyledGameSpaceProfile, StyledGameImgProfile, StyledGameTitleProfile } from "../../styledC/profile.tsx/profile";

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

    const renderGames = () => {
        if (userShow.owned.length === 0) return <StyledNothingProfile>Nada que ver aquí</StyledNothingProfile>;
    
        const gamesOwned = gamesData.filter(game => userShow.owned.includes(game._id));
        const gameGroups = [];
    
        for (let i = 0; i < gamesOwned.length; i += 3) {
            gameGroups.push(gamesOwned.slice(i, i + 3));
        }
    
        return gameGroups.map((group, index) => (
            <StyledGameRowProfile key={index}>
                {group.map((game) => (
                    <StyledGameSpaceProfile key={game._id}>
                        <StyledGameImgProfile src={`Leonardo_Phoenix_tic_tac_toe_with_3_rows_and_3_columns_there_s_2.jpg`} alt={game.name} />
                        <StyledGameTitleProfile>{game.name}</StyledGameTitleProfile>
                    </StyledGameSpaceProfile>
                ))}
            </StyledGameRowProfile>
        ));
    };

    return (
        <StyledMain>
            <StyledTitle>¡Saludos usuario {userShow.name}</StyledTitle>
            <StyledTitleProfile>Titulos que posees</StyledTitleProfile>
            <StyledLineProfile />
            {renderGames()}

        </StyledMain>
    )

}

export default Profile;