import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {
  fade,
  createStyles,
  InputBase,
  makeStyles,
  Theme,
} from '@material-ui/core';

const DivWrapper = styled('div')`
  background-color: #2a2b2d;
  height: 36px;
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  margin: 3px;
`;

const HeaderButton = styled.button`
  background-color: #393b3d;
  margin-left: 3px;
  color: #dbdfe6;
  border-radius: 5px;
  border: none;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      maxWidth: '200px',
      minWidth: '150px',
      height: '27px',
      display: 'flex',
      alignItems: 'center',
      marginTop: '3px',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: '#dbdfe6',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: '#dbdfe6',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  return (
    <DivWrapper>
      <ButtonWrapper>
        <HeaderButton type="button">カレンダー</HeaderButton>
        <HeaderButton type="button"> &nbsp; + &nbsp; </HeaderButton>
      </ButtonWrapper>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="検索"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>{' '}
    </DivWrapper>
  );
};

export default Header;
