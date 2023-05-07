import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: Yellow;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: Purple;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG Application</Heading>
            <SubHeading>Create your own content</SubHeading>
        </Image>
    )
}

export default Banner;