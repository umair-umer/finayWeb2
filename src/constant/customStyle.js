import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import { height } from '@mui/system';


export const theme = createTheme({
    palette: {
        primary: {
            main: '#2E2E2E'
        },
        secondary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        },
    },
    typography: {
        h1: {
            fontSize: '2.1875rem',
            fontWeight: 600
        },
        button: {
            fontFamily:[ 
            'Inter',
          
            ].join(','),
        },
        fontFamily: [
            'GlacialIndifferenceRegular ',
         
        ].join(','),
    },

});

export const useStyles = makeStyles({
    paper: {
        overflowY: 'unset !important',
    },
    customizedButton: {
        position: 'absolute !important',
        right: '-70px !important',
        top: '-20px !important',
        color: '#fff !important',
        background: 'rgb(255 255 255 / 30%) !important',
        display:'none !important',
    },
    indicator: {
        background: "#ff1c51 !important",
    },
    tabs: {
        padding: '0px 20px !important',
        borderBottom: '1px solid rgb(255 28 81 / 17%) !important',
        columnGap: '50px !important',
        width: '100%',
        maxWidth: 'max-content',
        "& button": {
            color: '#fff !important',
            // fontSize: '20px !important',
            textAlign: 'center !important',
            // fontWeight: '500 !important',
         
            "&:last-child": {
                marginRight: '0 !important',
               
            }
        },
    },
    tabsPanel: {
        color: '#fff',
        padding: '24px 24px 24px 0 !important',
        

    },
    label: {
        fontSize: '20px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        textTransform: 'capitalize !important',
        fontWeight: '700 !important'

    },
    root: {
        backgroundColor: '#7070707 !important',
        color: '#fff !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        '&: focus': {
            border: '10px solid green !important ',
        },
        // outline: '5px dotted green'
    },
    icon: {
        fill: '#fff !important',
        color: '#fff'
    },
    select: {
        // '&:focus': {
        //     backgroundColor: 'yellow'
        // },
        '& ul': {
            backgroundColor: '#1d1d1d',
        },
        '& li': {
            fontSize: 16,
            fontFamily: 'inter',
            textTransform: 'capitalize',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#FF1C51'
            },
        },
        '& li:last-child': {
        },
        '& div': {
            fontSize: 13,
            fontFamily: 'inter',
            borderBottom: '1px solid #ccc',
            padding: '0 15px',
            '& p': {
                fontSize: 13,
                fontFamily: 'inter',
                margin: '5px 0',
            }
        },
    },
    dialog: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important'
    },
    dialogTitle: {
        textAlign: 'center !important'
    },
    dialogContent: {
        textAlign: 'center !important'
    },
    dialogAction: {
        justifyContent: 'center !important'
    },
    dilogLabel: {
        color: '#fff !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '20px !important',
        fontWeight: '600 !important'
    },
    titleIcon: {
        backgroundColor: '#F85160 !important',
        color: theme.palette.secondary.main,
        '&:hover': {
            // backgroundColor: '#F85160',
            cursor: 'default !important',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem !important'
        }
    },
    checkButton: {
        borderRadius: '30px !important',
        backgroundColor: '#FF1C51 !important',
        fontWeight: '700 !important',
        fontSize: '20px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        padding: '5px 50px !important',
        textTransform: 'capitalize  !important',
        '&:hover': {
            backgroundColor: '#FF1C51  !important',
        }
    },
    closeButton: {
        // marginLeft: '50px !important',
        color: '#fff !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        textTransform: 'capitalize  !important',
        fontSize: '20px !important',
        fontWeight: '700 !important'
    },
    title: {
        fontSize: '20px !important',
        fontWeight: 'bold !important'
    },
    bidButton: {
        padding: '5px 20px !important',
        color: '#fff',
        background: '#FF1C51 !important',
        borderRadius: '26px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        textTransform: 'capitalize !important',
        fontWeight: '600 !important',
        height:'45px !important',
        width:'115px !important'
    },
    recentlyButton: {
        color: '#fff !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        textTransform: 'capitalize  !important',
        fontSize: '20px !important',
        fontWeight: '700 !important'
    },
    carts: {
        backgroundColor: "rgb(29,29,2,0.9)",
        width: 1000,
        display: "flex",
        height: 100,
        alignItems: 'center',
        justifyContent: "space-between",
        color: "red"

    },
    avtr: {
        width: "100%",
        height: "100%"

    },
    chip: {
        fontSize: 20,
    },
    titleAuthor: {
        fontSize: '20px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontWeight: '700 !important'
    },
    description: {
        fontSize: 18,
        color: '#707070',
        fontFamily: "inter !important",
    },
    price: {
        fontSize: '16px !important',
        fontFamily: "inter !important",
        fontWeight: '500 !important'
    },
    titleAuthor1: {
        fontSize: '16px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontWeight: '700 !important'
    },
    commentButton: {
        backgroundColor: 'rgb(29 29 29 / 25%) !important',
        borderRadius: '10px !important',
        textTransform: 'lowercase !important',
        fontSize: '12px',
        '&:hover': {
            backgroundColor: 'rgb(29 29 29 / 60%)  !important',
        },
    },
    TfieldComent: {
        backgroundColor: '#A4A4A4',
        borderRadius: '10px',
        border: "none !important"
    },
    postCommentButton: {
        backgroundColor: '#FF1C51 !important',
        // borderRadius: '10px !important',
        textTransform: 'capitalize !important',
        boxShadow: 'none !important',
        borderRadius: '50px !important',
        fontSize: '15px',
        fontFamily: 'GlacialIndifferenceRegular !important',
        '&:hover': {
            backgroundColor: '#FF1C51  !important',
        },

    },
    readMore: {
        backgroundColor: 'rgb(29 29 29 / 25%) !important',
        borderRadius: '10px !important',
        textTransform: 'lowercase !important',
        fontSize: '12px',
        '&:hover': {
            backgroundColor: 'rgb(29 29 29 / 60%)  !important',
        },
    },
    topBannerButton: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        position: 'relative',
        top: '-37px',
        alignItems: 'center'
    },
    topButtonSection: {
        fontSize: '18px !important',
       width:"220px !important",
       height:"50px !important",

       fontFamily: 'GlacialIndifferenceRegular !important',
       fontWeight: '700 !important',
        textTransform: 'none !important',
        borderRadius: '31px !important',
        background: '#FF1C51 !important',
        marginRight: '30px !important',
        "&:last-child": {
            marginRight: 0
        }
    },
    iconButton1: {
        width: '35px',
        height: '35px',
        borderRadius: '100%',
        backgroundColor: '#FF1C51',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '20px',
        cursor: 'pointer',
    },
    editIconButton: {
        width: '32px',
        height: '32px',
        borderRadius: '100%',
        backgroundColor: '#FF1C51',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        border: '5px solid #1D1D1D',
        marginLeft:"-8px !important"
    },
    socialIcons: {
        color: '#fff',
        fontSize: '18px'
    },
    editIcons: {
        color: '#fff',
        fontSize: '16px !important',
        cursor: 'pointer'
    },
    top: {
        margin: '-200px 0 0 !important',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column !important'
    },
    profile: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
        // flexDirection: 'column'
    },
    avatar: {
        width: "200px",
        height: '200px',
        border: '10px solid #1D1D1D',
        borderRadius: '100%',
        objectFit: 'cover'
    },
    online: {
        position: 'absolute !important',
        backgroundColor: '#10FF90 !important',
        width: '25px !important',
        height: '25px !important',
        right: 0,
        bottom: '30% !important',
        margin: 'auto !important',
        border: '3px solid #1d1d1d !important',
        borderRadius: '100% !important',
    },
    editAvatar: {
        position: 'absolute !important',
        width: '32px',
        height: '32px',
        borderRadius: '100% !important',
        backgroundColor: '#FF1C51 !important',
        bottom: 8,
        left: '62%',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        border: '5px solid #1D1D1D !important',
        cursor: 'pointer !important'
    },
    accessimg: {
        width: '18px',
        textAlign: 'left',
        margin:' 2px 10px',
    },
    avatarTitle: {
        marginTop: '5px !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    name: {
        color: '#fff',
        fontSize: '18px !important',
        fontWeight: '600 !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontWeight: '700 !important'
    },
    editIconProfile: {
        color: '#FF1C51 !important',
        fontSize: '18px !important'
    },
    hobbies: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important'
    },
    hobbiesText: {
        color: '#fff !important',
        fontSize: '14px !important',
        fontFamily: 'inter !important',
        '@media(max-width: 320px)' : {
     
            color: "#fff !important",
            fontSize: "15px !important",
            fontFamily: " inter !important",
        
              },
    },
    followerSection: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        marginBottom: '30px !important'
    },
    followers: {
        color: '#fff !important',
        fontSize: '18px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontWeight: '600 !important',
        marginRight: '10px !important',
        '@media(max-width: 320px)' : {
     
            fontSize:" 10px !important"
           
              },
    },
    followersButtonSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonFollow: {
        fontSize: '16px !important',
        padding: '10px 40px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        textTransform: 'none !important',
        borderRadius: '25px !important',
        background: '#FF1C51 !important',
        fontWeight: '700 !important',
        '@media(max-width: 320px)' : {
     
            padding: "5px 85px !important"
           
        
              },
    },
    rootMedia: {
        background: 'rgb(251 247 248 / 18%)',
        border: '0px solid transparent !important',
        borderRadius: '10px !important',
        color: '#fff !important',
        fontSize: "20px !important",
        fontWeight: '600 !important',
        "&:hover": {
            "&& fieldset": {
                border: "0px solid transparent"
            }
        },
    },
    profileGrid: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center !important',
        width: '100%  !important',
        flexWrap: 'wrap',
       
    },
    profileGrid25: {
        width: 'calc(25% - 10px) !important',
        boxSizing: 'border-box',
        display: 'flex !important',
        flexDirection: 'column',
        backgroundColor: 'rgb(255 255 255 / 18%)',
        padding: '10px 10px',
        borderRadius: '15px',
        alignItems: 'center',
        margin: '0 0 50px !important',
    },
    topImages: {
        display: 'flex !important',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5px',
        alignItems: 'center',
        columnGap: '5px',
    },
    imagesGrid: {
        display: 'flex',
        justrifyContent: 'space-between'
    },
    tabProfileCard: {
        backgroundColor: '#ccc',
        borderRadius: '14px  !important',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginRight: '10px',
        width: '25%',
        paddingRight: '10px',
        paddingLeft: '10px'
    },
    tabProfileInnerCard: {
        width: '100% !important',
        columnGap: '10px',
        paddingRight: '10px',
        paddingLeft: '10px'
    },
    img: {
        width: '100%'
    },
    removePadding: {
        padding: '0!important'
    },
    moreVertIconSize: {
        fontSize: '16px !important',
        color: '#fff'
    },
    profileCardBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    mw120: {
        minWidth: '150px !important',
        marginTop: '10px !important'
    },
    gridFollowers: {
        backgroundColor: '#7070704a',
        marginTop: '75px',
        borderRadius: '15px',
        padding: '30px 30px',
    },
    groupFollowers: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    followersProfile: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
        width: '30%',
        marginBottom: '10px'
        // marginRight: '26px',
        // "&:last-child": {
        //     marginRight: 0
        // }
    },
    followButton: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '25px',
        width: '32%'
    },
    socialButtons: {
        fontSize: '27px !important',
        color: '#fff',
        '&:hover': {
            color: '#FF1C51',
        }
    },
    chatButton: {
        color: '#FF1C51',
        fontSize: '26px',
        marginRight: '30px'
    },
    dateButton: {
        fontSize: "26px",
        color: '#fff'
    },
    followsSection: {
        borderBottom: '2px solid #FF1C51',
        paddingBottom: '5.5px',
        marginBottom: '32px',
        display: 'flex'
    },
    titleFollower: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        color: '#fff !important',
        fontSize: '20px !important',
        fontWeight: '700  !important',
        marginRight: '10px !important'
    },
    followerName: {
        fontFamily: 'inter  !important',
        color: '#fff  !important',
        fontSize: '10px  !important',
        fontWeight: '500  !important',
        marginTop: '5px !important'
    },
    seeAllSection: {
        displya: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25px'
    },
    seeAll: {
        fontFamily: 'inter !important',
        fontSize: '16px !important',
        color: '#fff !important',
        textTransform: 'none !important',
        color:'#FF1C51 !important'
    },
    space: {
        marginTop: '36px'
    },
    commentGrid: {
        background: '#7070704a',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '125px'
    },
    paddingSpace: {
        padding: '44.4px 33px 19px'
    },
    userDetails: {
        marginBottom: '14px',
        display: 'flex'
    },
    userImageSpace: {
        marginRight: '10px',
        width: '49px'
    },
    userImage: {
        width: '100%'
    },
    userName: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '14px !important',
        fontWeight: '700 !important',
        color: '#fff'
    },
    userTime: {
        fontFamily: 'inter !important',
        fontSize: '10px !important',
        fontWeight: '500 !important',
        color: '#fff'
    },
    userTextBox: {
        paddingBottom: '14px',
        borderBottom: '1px solid #fff',
        marginBottom: '14px'
    },
    userText: {
        fontFamily: 'inter !important',
        fontSize: '10px !important',
        fontWeight: '400 !important',
        color: '#fff',
        lineHeight: '20px',
        textAlign: 'justify'
    },
    songSection: {
        marginBottom: '24px',
        display: 'flex'
    },
    songLinkSection: {
        marginRight: 2,
        marginTop: '5px'
    },
    linkIcon: {
        color: '#FF1C51',
        fontSize: '21px !important'
    },
    songName: {
        fontFamily: 'inter !important',
        fontSize: '14px !important',
        fontWeight: '500 !important',
        color: '#fff'
    },
    songSize: {
        fontFamily: 'inter !important',
        fontSize: '10px !important',
        fontWeight: '500 !important',
        color: 'rgb(255 255 255 / 50%) !important'
    },
    commentButtonBox: {
        width: '100%',
        marginBottom: '24px'
    },
    followerCommentBox: {
        marginBottom: '14px',
        paddingBottom: '24px',
        display: 'flex',
        borderBottom: '1px solid #fff',
        "&:last-child": {
            borderBottom: '0px solid #fff'
        }
    },
    spaceTop: {
        marginTop: '3px !important'
    },
    spaceRight: {
        marginRight: '10px !important'
    },
    followerComment: {
        fontFamily: 'inter !important',
        fontSize: '10px !important',
        fontWeight: '500  !important',
        color: '#fff !important'
    },
    lastSection: {
        width: "100%",
        position: 'absolute !important',
        bottom: '200px  !important',
        left: '0 !important',
        zIndex: '99 !important'
    },
    circle: {
        width: '69px',
        height: '69px',
        backgroundColor: "red !important"
    },
    quickLinks1:{
        padding: '13px 19px !important',
        fontSize: '33px !important',
        color: "#fff !important",
        backgroundColor: "#FF1C51 !important",
        borderRadius: '100% !important',
      
        margin: '0 0 30px !important',
        cursor: "pointer !important",
        width: '69px !important',
        height: '69px !important',
      
           
    },
    quickLinks: {
        fontSize: '33px !important',
        color: "#fff !important",
        backgroundColor: "#FF1C51 !important",
        borderRadius: '100% !important',
        padding: '12px 18px !important',
        margin: '0 0 30px !important',
        cursor: "pointer !important",
        width: '69px !important',
        height: '69px !important',
        "&:last-child": {
            margin: '0 0 0px !important',
        }
    },
    exploreContainer: {
        marginTop: '54px',
        maxWidth: '1180px !important',
        minWidth: '1180px !important',
        marginLeft: '20px'
    },
    exploreBox: {
        backgroundColor: '#7070704a',
        borderRadius: '15px',
        padding: '30px 0 50px'
    },
    exploreSpaceSelect: {
        padding: '0px 40px',
        marginBottom: '63px'
    },
    removeMarginTop: {
        marginTop: '0px !important',
    },
    online1: {
        position: 'absolute !important',
        backgroundColor: '#10FF90 !important',
        width: '13px !important',
        height: '13px !important',
        right: '5px !important',
        top: '35px !important',
        bottom: '0px !important',
        margin: 'auto !important',
        border: '3px solid #676767 !important',
        borderRadius: '100% !important',
    },
    explorerHeadingSection: {
        marginBottom: '30px',
        padding: '0px 40px'
    },

    explorerHeading: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        color: '#fff !important',
        fontSize: '25px  !important',
        marginBottom: '10px !important',
        fontWeight: '700 !important'
    },
    explorerBottom: {
        marginBottom: '44px !important',
        padding: '0px 10px !important'
    },
    explorerNewRelease: {
        boxSizing: 'border-box',
        display: 'flex !important',
        flexDirection: 'column',
        backgroundColor: 'rgb(255 255 255 / 18%)',
        padding: '10px 10px',
        borderRadius: '15px',
        alignItems: 'center',
        margin: '0 0 50px !important',
    },
    dividerClass: {
        padding: '0px 40px',
        marginBottom: '68px'
    },
    playListSection: {
        padding: '0px 116px'
    },
    playListBox: {
        display: 'flex',
    },
    playListFlex: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '18.3px !important',
        "&:last-child": {
            marginRight: '0 !important'
        }
    },
    playlistImageBox: {
        width: '124px !important'
    },
    playListTitle: {
        fontSize: '14px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        color: '#fff !important',
        fontWeight: '700 !important'
    },
    playListDetails: {
        fontSize: '12px !important',
        fontFamily: 'inter !important',
        color: '#fff !important',
    },
    playListButtonSubscribe:{
        
        borderRadius: '14px !important',
        color: '#fff !important',
        fontSize: '14px !important',
        padding: '0px 15px !important',
        textTransform: 'none !important',
        marginBottom: '17px !important',
        fontWeight: '500 !important',
        background:'#FF1C51 !important'
    },
    playListButton: {
        border: '1px solid #fff !important',
        borderRadius: '14px !important',
        color: '#fff !important',
        fontSize: '14px !important',
        padding: '0px 15px !important',
        textTransform: 'none !important',
        marginBottom: '17px !important',
        fontWeight: '500 !important'
    },
    rightFlex: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    playListUser: {
        display: 'flex',
        alignItems: 'center',
    },
    playListUserName: {
        fontSize: '12px !important',
        fontFamily: 'inter !important',
        fontWeight: '500 !important',
        color: '#fff !important'
    },
    tabFeedBox: {
        backgroundColor: '#7070704a',
        padding: '54px 31px',
        marginLeft: '-24px',
        borderRadius: '14px'
    },
    feedbackBox: {
        padding: '31px 55px',
        backgroundColor: 'rgba(29,29,29, 0.35)',
        borderRadius: '15px !important',
        marginBottom: '62px'
    },
    feedbackUserBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px'
    },
    feedbackUserImage: {
        width: '62px',
        marginRight: '44px !important'
    },
    feedbackUserName: {
        fontFamily: ' GlacialIndifferenceRegular !important',
        fontSize: '20px !important',
        fontWeight: '700 !important'
    },
    feedbackUserTime: {
        fontFamily: 'inter !important',
        fontSize: '14px !important',
    },
    feedbackUserPost: {
        fontSize: '16px !important',
        fontFamily: 'inter !important'
    },
    feedbackSpaceBottom: {
        marginBottom: '81px'
    },
    mediafriendsimg: {
        margin: '5px 7px',
    },
    feedbackSocial: {
        display: 'flex !important',
        margin: '30px 20px 0px'
    },
    feedbackSocialDetails: {
        marginRight: '55px !important',
        display: 'flex !important',
        alignItems: 'center !important'
    },
    feedbackIcon: {
        color: '#FF1C51',
        marginRight: '10px',
        fontSize:"35px !important"
    },
    feedbackText: {
        fontSize: '25px !important',
        fontFamily: 'inter'
    },
    drawerPaper: {
        background: '#1d1d1d !important',
        color: 'white !important'
    },
    blur: {
        filter: 'blur(8px)'
    },
    socialFriendButton: {
        background: 'rgb(251 247 248 / 18%) !important',
        fontFamily: 'inter !important',
        fontSize: '16px !important',
        textTransform: 'none !important',
        boxShadow: 'none !important'
    },
    socialFriendDropdown: {
        outline: '0 !important',
        padding: '7.5px ​14px !important',
        background: 'rgb(251 247 248 / 18%)',
        borderRadius: '5px !important',
        '& fieldset': {
            border: 'none !important',
            outline: 'none !important',
        },
        '&:hover': {
            border: '0px solid transparent !important',
            outline: '0 !important',
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850 !important",
            borderRadius: "5px 5px 0 0 !important"
        },
        connector: {
            borderLeft: "1px red solid"
        }
    },
    selectMedia: {
        width: '265px !important',
        padding: '55px 30px !important',
        borderRadius: '27px !important',
        backgroundColor: '#FF1C51 !important',
        border: '4.5px solid #FF1C51 !important',
        cursor: 'pointer',
        '&:hover': {
            borderColor: ' #FF1C51 !important',
            backgroundColor: 'transparent !important'
        },
    },
    selectText: {
        fontFamily: 'inter !important',
        fontSize: '52px !important',
        fontWeight: '500 !important',
        marginRight: '10px !important',
        color: '#fff !important',
        textAlign: 'center !important'
    },
    selectEvent: {
        width: '334px !important',
        padding: '55px 30px !important',
        borderRadius: '27px !important',
        backgroundColor: '#transparent !important',
        border: '4.5px solid #FF1C51 !important',
        cursor: 'pointer',
        '&:hover': {
            borderColor: 'transparent',
            backgroundColor: '#FF1C51 !important'
        },
    },
    selectSecondText: {
        fontFamily: 'inter !important',
        fontSize: '32px !important',
        marginRight: '10px !important',
        color: '#fff !important',
        textAlign: 'center !important'
    },
    selectType: {
        border: '1.5px solid #FF1C51 !important',
        cursor: 'pointer',
        padding: '30px 30px !important',
        borderRadius: '27px !important',
        '&:hover': {
            borderColor: 'transparent',
            backgroundColor: '#FF1C51 !important'
        },
    },
    subHeadingStepersSection: {
        borderBottom: '2px solid #FF1C51',
        paddingBottom: '5.5px',
        marginBottom: '13px',
        display: 'flex'
    },
    subHeadingStepers: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '20px !important',
        fontWeight: '700 !important',
        marginRight: '10px !important',
        color: '#fff !important'
    },
    gridStepersCreateSpacing: {
        padding: '0px 60px !important',
        marginBottom: '73.5px !important'
    },
    gridStepersSpacingCreateBox: {
        padding: '0px 150px !important',
        marginBottom: '73.5px !important'
    },
    gridStepersSpacing: {
        padding: '0px 40px !important',
        marginBottom: '73.5px !important'
    },
    addNewFieldSection: {
        display: 'flex !important',
    },
    addFieldIconsButton: {
        '&:hover': {
            backgroundColor: 'transparent !important',
            boxShadow: 'none',
        }
    },
    addFieldIcons: {
        color: '#FF1C51',
    },
    selectTypeActive: {
        border: '1.5px solid transparent !important',
        cursor: 'pointer',
        padding: '30px 30px !important',
        borderRadius: '27px !important',
        backgroundColor: '#FF1C51 !important'
    },
    boxUpload: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    uploadText: {
        fontSize: '20px !important',
        fontFamily: 'inter !important',
        color: '#fff !important'
    },
    uploadDetails: {
        fontSize: '14px !important',
        fontFamily: 'inter !important',
        color: 'rgba(251, 247, 248, 0.50) !important'
    },

    switch_track: {
        backgroundColor: "transparent !important",
    },
    switch_base: {
        color: "#fff !important",
        "&.Mui-disabled": {
            color: "#e886a9 !important"
        },
        "&.Mui-checked": {
            color: "#FF1C51 !important"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#4CAF50 !important",
        }
    },
    switch_primary: {
        "&.Mui-checked": {
            color: "#FF1C51 !important",
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "transparent !important",
        },
    },
    mucicontainer: {

        position: 'fixed !important',
        bottom: '45px',
        height: 'auto !important',
        width: '900px !important',
        background: 'rgb(29 29 29 / 0.88) !important',
        // background: 'rgb(225,225,225,25%)',
        border: 0,
        color: 'white',
        // height: "100%",
        padding: '0 14px',
        borderRadius: "17px",
        marginBottom:"12px !important",
        zIndex: 999,
        right:'30%',
        transform: 'translate(50%)',
        '@media(max-width: 320px)' : {
            height: "250px !important",
            width: "100% !important",
   
         },
    },
    play_arrow: {
        background: '#FF1C51 !important',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        color: 'white',
        fontSize:'40px !important',
        marginTop:'5px'
      
    },
    funtionsButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        

    },
    slidersbox: {
        width: "26%",
        margin: "0px 0 -6px 0px",
    },

    iconsbox: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: "8px",
        marginTop:"-4px!important"
    },
    cutomSlider: {
        height: "1px !important",
        color: "#FF1C51 !important",
        '& .MuiSlider-thumb': {
            width: '10px',
            height: '10px'
        },
    },
    pauseButton: {
        backgroundColor: "#FF1C51",
        borderRadius: "100px",
        fontSize: "43px !important",
        cursor: 'pointer'
    },
    mdarrow: {
        color: "#FF1C51 !important",
        fontSize: "60px !important",
        cursor: 'pointer'
    },
    songDetailBox: {
        marginTop: "25px",
    },
    songDetail: {
        fontSize: '14px !important',
        fontFamily: "inter !important",
        fontWeight: 500
    },
    duration: {
        marginRight: "0px",
        fontSize: '12px !important',
    },
    songIcon: {
        color: '#fff',
        fontSize: '25px !important',
        '&:hover': {
            color: '#FF1C51 !important',
            boxShadow: 'none',
        }
    },
    iconButton: {
        '&:hover': {
            backgroundColor: 'transparent !important', boxShadow: 'none',
        }
    },
    generalHeading: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '25px !important',
        fontWeight: '700 !important',
        marginRight: '10px',
        color: '#fff',
        borderBottom: '1px solid #ff1c51'
    },
    link: {
        color: '#fff',
        fontFamily: 'inter !important',
        fontSize: '20px !important'
    },
    termsContainer: {
        margin: '35px 0 55px'
    },
    termsDescription: {
        padding: '39px 35px  39px 35px !important',
        backgroundColor: 'rgba(255,255,255,0.25) !important',
        borderRadius: '15px !important'
    },
    termsTitle: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '25px !important',
        fontWeight: '700 !important',
        color: '#fff !important',
        marginBottom: '58px !important'
    },
    termsDetails: {
        color: '#fff !important',
        fontFamily: 'inter !important',
        fontSize: '14px !important',
        marginBottom: '33px !important'
        // textAlign: 'justify !important'
    },
    imgBox: {
        width: '64px',
        height: '64px',
        objectFit: 'cover !important',
        marginRight: '15px !important'
    },
    chatImg: {
        width: '100%',
        borderRadius: '100% !important',
        border: '1.5px solid #fff !important'
    },
    chatFlex: {
        display: 'flex !important',
        flexDirection: 'column !important',
        width: 'calc(100% - 79px)!important'
    },
    chatUserSection: {
        display: 'flex',
        marginBottom: '8px !important',
        alignItems: 'center',
        padding: '8px 15px !important',
        // background: 'rgb(255 255 255 / 12%) !important',
        borderRadius: '12px !important',
        '&:hover': {
            background: 'rgb(255 255 255 / 12%) !important',

        }
    },
    chatUserName: {
        fontSize: '20px !important',
        color: '#fff !important',
        fontWeight: '600 !important',
        fontFamily: 'inter !important'
    },
    leftChat: {
        backgroundColor: '#434343 !important',
        padding: '24px 8px !important',
        width: '30%',
        cursor: 'pointer',
        height: '90vh !important',
        overflow: 'auto !important',
        borderTopLeftRadius: '20px  !important',
        borderBottomLeftRadius: '20px !important'
        // borderRadius: '20px !important'
    },
    paper1: {
        borderRadius: '18px !important',
        padding: '0 !important',
        overflowY: 'unset !important',
    },
    removePaddingChat: {
        padding: '0 !important',
        display: 'flex'
    },
    // chatUserName: {
    //     color: '#fff',
    //     fontSize: '20px !important',
    //     fontWeight: '600 !important'
    // },
    chatUserTime: {
        color: 'rgba(255,255,255,0.50) !important',
        fontSize: '14px !important',
        fontFamily: 'inter !important'
    },
    chatUserChat: {
        fontSize: '12px !important',
        color: 'rgba(255,255,255,0.50) !important',
        whiteSpace: 'nowrap !important',
        width: '100%',
        overflow: 'hidden !important',
        textOverflow: 'ellipsis !important',
        fontFamily: 'inter !important'
        // text??OverFlow: 'ellipsis !important'
        //         white-space: nowrap; 
        //   width: 50px; 
        //   overflow: hidden;
        //   text-overflow: ellipsis; 
    },
    parentChat: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px !important'
    },
    rightChat: {
        backgroundColor: '#1D1D1D !important',
        padding: '24px 20px !important',
        width: '70%',
        cursor: 'pointer',
        height: '90vh !important',
        overflow: 'auto !important',
        flexWrap: 'wrap !important',
        alignItems: 'flex-end !important',
        display: 'flex !important',
        borderTopRightRadius: '20px  !important',
        borderBottomRightRadius: '20px  !important'
    },
    senderBox: {
        display: 'flex'
    },
    senderBoxImage: {
        width: '52px',
        height: '52px',
        margin: '0 15px 0 0'
    },
    senderImage: {
        borderRadius: '100%',
        width: '100%'
    },
    senderName: {
        fontSize: '16px !important',
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontWeight: '600 !important',
        color: '#fff !important',
        marginBottom: '10px !important'
    },
    senderMessage: {
        borderRadius: '0 18px 18px 18px',
        border: '1px solid #FF1C51',
        padding: '15px',
        color: '#fff',
        fontFamily: 'inter !important',
        fontSize: '14px !important',
        width: '95%',
        maxWidth: 'max-content',
        marginRight: '10px !important'
    },
    senderMessageTime: {
        color: 'rgba(255,255,255,0.50)',
        fontFamily: 'inter !important',
        fontSize: '12px !important',
    },
    messageBox: {
        width: 'calc(100% - 67px)'
    },
    reciverBox: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    reciverBoxImage: {
        width: '52px',
        height: '52px',
        margin: '0 15px 0 0'
    },
    reciverImage: {
        borderRadius: '100%',
        width: '100%'
    },
    reciverName: {
        fontSize: '16px !important',
        fontFamily: 'inter !important',
        fontWeight: '600 !important',
        color: '#fff !important',
        marginBottom: '10px !important'
    },
    reciverMessage: {
        borderRadius: '18px 0px 18px 18px',
        // border: '1px solid #FF1C51',
        padding: '15px',
        color: '#fff',
        fontFamily: 'inter !important',
        fontSize: '14px !important',
        width: '95%',
        maxWidth: 'max-content',
        backgroundColor: 'rgba(255,255,255,0.25)'
    },
    reciverMessageTime: {
        color: 'rgba(255,255,255,0.50)',
        fontFamily: 'inter !important',
        fontSize: '12px !important',
    },
    userChatResponse: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px !important'
    },
    messageSendTextFieldBox: {
        display: 'flex !important',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        // width: '790px',
        // position: 'sticky',
        // bottom: 0
    },
    messageTextFieldBox: {
        width: '90%',
    },
    // messageSendBox: {
    //     width: '10%',
    // },
    multilineColor: {
        color: '#fff !important',
        padding: '20.5px 10px !important',
        fontFamily: 'inter !important'
    },
    newsLetterInput: {
        width: '100%',
    },
    messageSendBox: {
        marginLeft: '5px',
        width: '52px',
        height: '52px',
        borderRadius: '100%',
        border: '1px solid #FF1C51',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.12)'
    },
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "#1d1d1d",
            color: '#fff',
            fontFamily: 'inter',
            // position: 'relative',
            top: '60px !important'
        },
        '& li': {
            '&:hover': {
                backgroundColor: '#FF1C51 !important'
            }
        },
        '&.Mui-selected': {
            backgroundColor: "turquoise",
            color: "white",
            fontWeight: 600
        }
    },
    settingTitleBox: {
        marginBottom: '61px !important',
        padding: '0 98px !important'
    },
    settingTitle: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '25px !important',
        fontWeight: '700 !important',
        marginRight: '10px !important',
        color: '#fff !important'
    },
    boxBorder: {
        borderBottom: '2px solid #FF1C51',
        paddingBottom: '5.5px',
        marginBottom: '13px'
    },
    paymentBox: {
        background: 'rgba(255, 255, 255, 0.18)',
        borderRadius: '15px',
        padding: '33px 39px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center !important',
        alignItems: 'center !important'
    },
    paypalBox: {
        width: '61px !important',
        height: '75px !important',
        marginBottom: '49px !important'
        
    },
    blockuserButton:{
        backgroundColor: '#FF1C51 !important',
        // padding: '8.5px 0px !important',
        borderRadius: '30px !important',
        fontFamily: 'inter !important',
        textTransform: 'capitalize !important',
        fontSize: '15px !important',
        fontWeight: '500 !important',
        boxShadow: 'none !important',
        width: '136px !important',
        color:"#FFF !important",
        border: '1px solid #ff1c51 !important',
        '&:hover': {
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
            border: '1px solid #fff !important',
            color:"red !important"
        },

    },
    connect: {
        backgroundColor: '#FF1C51 !important',
        // padding: '8.5px 0px !important',
        borderRadius: '30px !important',
        fontFamily: 'inter !important',
        textTransform: 'capitalize !important',
        fontSize: '15px !important',
        fontWeight: '500 !important',
        boxShadow: 'none !important',
        width: '136px !important',
        border: '1px solid #ff1c51 !important',
        '&:hover': {
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
            border: '1px solid #fff !important'
        },
    },
    connected: {
        backgroundColor: 'transparent !important',
        padding: '8.5px 0px !important',
        borderRadius: '30px !important',
        fontFamily: 'inter !important',
        textTransform: 'capitalize !important',
        fontSize: '15px !important',
        fontWeight: '500 !important',
        boxShadow: 'none !important',
        border: '1px solid #fff !important',
        width: '136px !important',
        '&:hover': {
            backgroundColor: '#FF1C51 !important',
            boxShadow: 'none !important',
            border: '1px solid #ff1c51 !important'
        },
    },
    subHeadingSetting: {
        fontFamily: 'GlacialIndifferenceRegular !important',
        fontSize: '25px !important',
        fontWeight: '700 !important',
        color: '#fff !important'
    },
    boxFormBorder: {
        paddingBottom: '5.5px',
        marginBottom: '13px'
    },
    labelSetting: {
        fontFamily: 'inter !important',
        fontSize: '18px !important',
        color: '#fff'
    },
    iconButton2: {
        background: '#FF1C51 !important'
    },
    removeThumb: {
        color: 'rgba(255,255,255,0.60) !important',
        border: '1px solid transparent',
        '& .MuiSlider-thumb': {
            width: 0,
            height: 0
        },
    },
    inputUnderline: {
        borderBottom: '2px solid green !important'
    },
    steperInputLabel: {
        fontSize: '20px !important',
        fontFamily: 'inter',
    },
    connectedSocials: {
        fontWeight: '600 !important',
        fontSize: '20px !important',
        fontFamily: 'inter !important',
        color: '#fff !important'
    },
    settingLabel: {
        fontSize: '20px !important',
        fontFamily: 'inter !important',
        color: '#fff !important'
    },
    input: {
        paddingLeft: '10px'
    },
    advanceSettingBtn:{
        fontFamily: 'inter !important' ,
         fontSize: '18px !important', 
         background: '#FF1C51 !important',
          color:'white !important',
         padding:'15px 35px !important',
         borderRadius:'35px !important',
         textTransform:'none !important',
         fontWeight:'600 !important',
       
           '&:hover': {
            background: "#dc2751 !important",
            
          }
    }
})